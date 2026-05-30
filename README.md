# Kala Vault

Kala Vault is a B2B artwork rental SaaS platform. This repository contains the backend API, frontend app, and deployment infrastructure for the MVP.

## Repository Structure
- `backend/` - Node.js/TypeScript API with Prisma, Express, Redis, and service-driven architecture
- `frontend/` - Next.js 15 app router with TailwindCSS and shadcn/ui components
- `architecture.md` - project architecture, phases, and system diagrams
- `database_schema.md` - PostgreSQL schema design and ER model
- `api_spec.md` - API endpoint design and contract definitions
- `deployment.md` - Docker, CI/CD, and production deployment guidelines

## Quick start
1. Copy environment examples:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env`
2. Start backend:
   - `cd backend`
   - `npm install`
   - `npm run prisma:generate`
   - `npm run dev`
3. Start frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

## Documentation
- `architecture.md`
- `database_schema.md`
- `api_spec.md`
- `deployment.md`

## Standards
- Repository pattern
- Service layer separation
- DTO validation
- Centralized middleware and error handling
- Async queue processing
- Secure auth and RBAC
- Pagination, filtering, and search
