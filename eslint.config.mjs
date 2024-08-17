import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';
import vitest from 'eslint-plugin-vitest';

export default withNuxt({
  plugins: { vitest, stylistic },

  languageOptions: { globals: { ...vitest.environments.env.globals } },

  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'curly': ['error', 'all'],
    'no-irregular-whitespace': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'stylistic/indent': ['error', 2],
    'stylistic/quotes': ['error', 'single'],
    'stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    'stylistic/no-irregular-whitespace': 0,
    'stylistic/semi': ['error', 'always'],
    'stylistic/arrow-parens': ['error', 'always'],
    'stylistic/brace-style': ['error', '1tbs'],
    'stylistic/quote-props': ['error', 'consistent'],
    'stylistic/max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },

  ignores: [
    'node_modules/**',
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'coverage/**',
    '__snapshots__/**',
    'src/locales/**',
    '/logs',
    '*.log*',
    'lib-cov',
    '.npm',
    '.eslintcache',
    '.nitro',
    '.idea',
    'sw.*',
    '.DS_Store',
    '*.swp',
    '.stylelintcache',
    '.lighthouseci',
    'lighthouse-reports',
    '.unlighthouse',
    '.fleet',
    '.info',
    '*.crt',
    '*.key',
    'src/auto-imports.d.ts',
  ],
});
