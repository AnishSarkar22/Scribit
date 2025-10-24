FROM node:24-bullseye-slim AS builder

# Ensure pnpm is available
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app/frontend

# Copy manifest and lockfile first for layer caching
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

# Production image serving the static build via nginx
FROM nginx:alpine AS runner
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
