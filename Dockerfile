FROM --platform=linux/amd64 node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml ./

COPY . .

RUN pnpm install --frozen-lockfile --ignore-scripts

WORKDIR /app/website
RUN pnpm run build

FROM nginx:stable-alpine AS production

COPY --from=builder /app/website/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
