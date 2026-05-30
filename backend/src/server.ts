import dotenv from 'dotenv';
import { app } from './app';
import { logger } from './shared/logger/logger';

dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app
  .listen(port, () => {
    logger.info({ port }, 'Kala Vault backend listening');
  })
  .on('error', (error) => {
    logger.error({ error }, 'Server startup failed');
    process.exit(1);
  });
