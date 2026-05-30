import { User, RefreshToken } from '@prisma/client';
import { prisma } from '../../shared/db/prisma';

export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  async createRefreshToken(data: { userId: string; token: string; expiresAt: Date }) {
    return prisma.refreshToken.create({ data });
  }

  async revokeRefreshToken(token: string) {
    return prisma.refreshToken.updateMany({
      where: { token, revoked: false },
      data: { revoked: true },
    });
  }

  async findRefreshToken(token: string) {
    return prisma.refreshToken.findFirst({ where: { token, revoked: false } });
  }
}
