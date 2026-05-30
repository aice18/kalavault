import { Request, Response, NextFunction } from 'express';
import { jwtVerify, JWTPayload } from 'jose';
import { config } from '../../config';
import { ApiError } from '../errors/api-error';

export interface AuthRequest extends Request {
  user?: JWTPayload & { id: string; role: string };
}

const accessTokenSecret = new TextEncoder().encode(config.jwtSecret);

export async function authGuard(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    throw new ApiError('Authorization header missing', 401);
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const { payload } = await jwtVerify(token, accessTokenSecret);
    req.user = payload as JWTPayload & { id: string; role: string };
    next();
  } catch (error) {
    throw new ApiError('Invalid access token', 401);
  }
}

export function roleGuard(requiredRoles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const role = req.user?.role;
    if (!role || !requiredRoles.includes(role)) {
      throw new ApiError('Forbidden', 403);
    }
    next();
  };
}
