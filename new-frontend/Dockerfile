# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Set NODE_ENV to production for Next.js build
ENV NODE_ENV=production

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g next

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["next", "start"]
