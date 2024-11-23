import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/types/app.ts'],
  minify: true,
  sourcemap: true,
  treeshake: true,
  dts: true,
  clean: true,
  format: ['esm', 'cjs'],
  outExtension(ctx) {
    return { js: ctx.format === 'esm' ? '.mjs' : '.cjs' }
  }
})
