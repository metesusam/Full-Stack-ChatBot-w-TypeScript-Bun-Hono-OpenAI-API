import hono from '@hono/eslint-config'

export default [
  ...hono,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error']
    }
  }
]
