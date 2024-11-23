# My App API

## Migration

### From empty to schema.prisma

```
npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0001_init.sql
```

### From D1 to schema.prisma

```
npx prisma migrate diff --from-url file:.wrangler/state/v3/d1/miniflare-D1DatabaseObject/xxxx.sqlite --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0002_fixed.sql
```

### Apply migration to D1(Local)

`{my-d1-database-name}` is the name of the D1 database in `wrangler.toml`

```
npx wrangler d1 migrations apply {my-d1-database-name} --local
```

### Apply migration to D1(Remote)

```
npx wrangler d1 migrations apply {my-d1-database-name}
```
