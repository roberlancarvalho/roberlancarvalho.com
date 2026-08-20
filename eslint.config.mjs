import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'public/admin/**',
    'tina/__generated__/**',
    // Standalone CJS Node script run directly via `node algolia-indexer.js`
    // as part of `npm run build` — not app source, not compiled.
    'algolia-indexer.js'
  ])
])

export default eslintConfig
