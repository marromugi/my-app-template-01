# my-app

## stack

- nextjs(page router)
- hono
- wrangler
- D1
- prisma
- vitest
- pnpm workspace

## structure

- apps
  - api
  - app

## get started

- replace `@my-app` to your project name
- create d1 database, and update wrangler.toml

```
npx wrangler d1 create {your-d1-database-name}
```

- run `pnpm install`
- migrate prisma schema

```
npx wrangler d1 migrations apply {your-d1-database-name} --local
```

- generate prisma client

```
npx prisma generate
```

- run `pnpm dev` in apps/api
- run `pnpm dev` in apps/app
- access to http://localhost:3000

## deploy

### api

```
cd apps/api
pnpm build
```

### app

In default, your app will deploy to `Vercel`.

```
pnpm deploy:prod
```

## TODO

- replace `nextjs` to `remix`
