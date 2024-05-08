import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'curly': 0,
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
  },

  ignores: [
    'node_modules/**',
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'coverage/**',
    '__snapshots__/**',
    'src/locales/**',
  ],
},);
