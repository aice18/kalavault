import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';
import { config } from '../../config';
import { AuthRepository } from './auth.repository';
import { ApiError } from '../../shared/errors/api-error';

const authRepository = new AuthRepository();
const accessTokenSecret = new TextEncoder().encode(config.jwtSecret);
const refreshTokenSecret = new TextEncoder().encode(config.jwtRefreshSecret);

export class AuthService {
  async login(email: string, password: string) {
    const user = await authRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new ApiError('Invalid credentials', 401);
    }

    const accessToken = await new SignJWT({ id: user.id, role: user.role.name })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(config.jwtAccessExpiresIn)
      .sign(accessTokenSecret);

    const refreshToken = await new SignJWT({ id: user.id, role: user.role.name })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(config.jwtRefreshExpiresIn)
      .sign(refreshTokenSecret);

    await authRepository.createRefreshToken({
      userId: user.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return { accessToken, refreshToken, user };
  }

  async refresh(token: string) {
    let payload;
    try {
      const decoded = await jwtVerify(token, refreshTokenSecret);
      payload = decoded.payload;
    } catch (error) {
      throw new ApiError('Invalid refresh token', 401);
    }

    const existing = await authRepository.findRefreshToken(token);
    if (!existing) {
      throw new ApiError('Refresh token revoked or expired', 401);
    }

    await authRepository.revokeRefreshToken(token);

    const accessToken = await new SignJWT({ id: payload.id, role: payload.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(config.jwtAccessExpiresIn)
      .sign(accessTokenSecret);

    const refreshToken = await new SignJWT({ id: payload.id, role: payload.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(config.jwtRefreshExpiresIn)
      .sign(refreshTokenSecret);

    await authRepository.createRefreshToken({
      userId: payload.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return { accessToken, refreshToken };
  }
}
