# STRIDE

A headless storefront built on **Magento GraphQL + Next.js App Router**, demonstrating RSC-first architecture, Apollo Client normalized caching, and type-safe codegen.

## Prerequisites

- Node.js 20+
- pnpm 11+
- Docker (for Magento backend)
- [markshust/docker-magento](https://github.com/markshust/docker-magento) running with Magento configured at `local.env.url`

## Getting Started

```bash
pnpm install
pnpm codegen
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## SSL Certificate Setup (docker-magento)

Magento runs in Docker behind a self-signed SSL certificate. Node.js rejects self-signed certs by default, which breaks codegen, `pnpm build`, and `pnpm dev`. Here's the one-time fix:

### 1. Install mkcert and trust its CA

```bash
brew install mkcert
mkcert -install
```

### 2. Generate a trusted certificate for `local.env.url`

```bash
mkcert local.env.url
```

This creates `local.env.url.pem` and `local.env.url-key.pem` in the current directory.

### 3. Copy the certificate into the Docker nginx container

```bash
docker cp local.env.url.pem magento-test-app-1:/etc/nginx/certs/nginx.crt
docker cp local.env.url-key.pem magento-test-app-1:/etc/nginx/certs/nginx.key
docker exec -u root magento-test-app-1 chmod 644 /etc/nginx/certs/nginx.key
docker exec magento-test-app-1 nginx -s reload
```

> **Note:** The container name `magento-test-app-1` may differ — check with `docker compose ps`. If you run `docker compose down -v`, the volume is deleted and you'll need to re-run these `docker cp` commands.

### 4. Tell Node.js to trust the mkcert CA

Node.js uses its own CA bundle, not the system trust store. `NODE_EXTRA_CA_CERTS` must be set at the **process level** before Node.js starts (`.env.local` is loaded too late).

Add to your `~/.zshrc` (or `~/.bashrc`):

```bash
export NODE_EXTRA_CA_CERTS="/Users/<your-username>/Library/Application Support/mkcert/rootCA.pem"
```

Find your path with `mkcert -CAROOT`. Restart your terminal or run `source ~/.zshrc`.

### Verify

```bash
curl -I https://local.env.url   # should return HTTP/2 200
pnpm dev                        # should render without SSL errors
```

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build (prerenders pages against Magento) |
| `pnpm start` | Serve production build |
| `pnpm codegen` | Generate TypeScript types from Magento GraphQL schema |
| `pnpm codegen:watch` | Watch mode — regenerates types on file changes |
| `pnpm lint` | Run ESLint |

## Tech Stack

- **Next.js 16** — App Router, RSC, Turbopack
- **Apollo Client 4** — normalized cache, RSC integration via `@apollo/client-integration-nextjs`
- **GraphQL Codegen** — `client-preset` with fragment masking for type-safe, colocated data fetching
- **Tailwind CSS 4** — CSS-first configuration, STRIDE design tokens
- **TypeScript** — strict mode + `noUncheckedIndexedAccess`