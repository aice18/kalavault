import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('30d'),
  CLOUDFLARE_R2_ACCOUNT_ID: z.string().min(1),
  CLOUDFLARE_R2_BUCKET: z.string().min(1),
  CLOUDFLARE_R2_ACCESS_KEY: z.string().min(1),
  CLOUDFLARE_R2_SECRET_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  PORT: z.string().optional(),
  FRONTEND_URL: z.string().url().optional(),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  ZOHO_SIGN_CLIENT_ID: z.string().optional(),
  ZOHO_SIGN_CLIENT_SECRET: z.string().optional(),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('debug'),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error('❌ Invalid environment configuration:');
  parsed.error.errors.forEach((err) => {
    console.error(`  - ${err.path.join('.')}: ${err.message}`);
  });
  throw new Error(`Invalid environment configuration: ${parsed.error.message}`);
}

export const config = {
  databaseUrl: parsed.data.DATABASE_URL,
  redisUrl: parsed.data.REDIS_URL,
  jwtSecret: parsed.data.JWT_SECRET,
  jwtRefreshSecret: parsed.data.JWT_REFRESH_SECRET,
  jwtAccessExpiresIn: parsed.data.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshExpiresIn: parsed.data.JWT_REFRESH_EXPIRES_IN,
  cloudflareR2AccountId: parsed.data.CLOUDFLARE_R2_ACCOUNT_ID,
  cloudflareR2Bucket: parsed.data.CLOUDFLARE_R2_BUCKET,
  cloudflareR2AccessKey: parsed.data.CLOUDFLARE_R2_ACCESS_KEY,
  cloudflareR2SecretKey: parsed.data.CLOUDFLARE_R2_SECRET_KEY,
  nodeEnv: parsed.data.NODE_ENV,
  port: parsed.data.PORT ? Number(parsed.data.PORT) : 4000,
  frontendUrl: parsed.data.FRONTEND_URL,
  razorpayKeyId: parsed.data.RAZORPAY_KEY_ID,
  razorpayKeySecret: parsed.data.RAZORPAY_KEY_SECRET,
  zohoSignClientId: parsed.data.ZOHO_SIGN_CLIENT_ID,
  zohoSignClientSecret: parsed.data.ZOHO_SIGN_CLIENT_SECRET,
  logLevel: parsed.data.LOG_LEVEL,
};
