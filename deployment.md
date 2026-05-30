# Deployment and DevOps Guide

## Architecture
- Backend and frontend run in separate Docker containers
- NGINX reverse proxy routes `/api` to backend and static pages to frontend
- PostgreSQL hosted in a managed service or self-hosted with backups
- Redis for caching and queue persistence
- Cloudflare R2 for artwork media storage

## Docker
- `docker-compose.yml` orchestrates backend, frontend, Postgres, Redis, and optional Prometheus
- Each service uses environment variables from `.env`
- Production containers should be built with multi-stage Dockerfiles and minimal runtime image layers

## CI/CD
- GitHub Actions pipeline should include:
  - `lint` checks for backend and frontend
  - `type-check` for TypeScript
  - `test` stage for unit and integration tests
  - `build` stage for production images
  - `deploy` stage for staging and production

## Environment config
- Separate secrets for `development`, `staging`, and `production`
- Backend environment keys:
  - `DATABASE_URL`
  - `REDIS_URL`
  - `JWT_SECRET`
  - `JWT_REFRESH_SECRET`
  - `CLOUDFLARE_R2_ACCOUNT_ID`
  - `CLOUDFLARE_R2_ACCESS_KEY`
  - `CLOUDFLARE_R2_SECRET_KEY`
  - `RAZORPAY_KEY_ID`
  - `RAZORPAY_KEY_SECRET`
  - `ZOHO_SIGN_CLIENT_ID`
  - `ZOHO_SIGN_CLIENT_SECRET`

## NGINX
- Proxy `/api/v1/` to backend container
- Proxy static assets and frontend SSR to frontend container
- Use TLS certificate and HSTS

## Backup strategy
- PostgreSQL: daily logical backups, weekly PITR snapshots
- Redis: AOF + RDB snapshots depending on persistence requirements
- R2: object lifecycle with versioning and retention for media backups

## Monitoring and logging
- Structured logs from backend with correlation IDs
- Application metrics for API latency, queue backlog, billing events
- Alerting for failed webhook processing, payment retries, and contract renewals

## Production hardening
- Enable HTTPS only
- Restrict admin routes with IP whitelisting and RBAC
- Validate webhooks using signatures
- Use signed URLs for protected image delivery
- Rotate refresh tokens and revoke stale sessions
