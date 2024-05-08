// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, },
  modules: ['@nuxt/eslint',],
  eslint: {
    checker: {
      configType: 'flat',
    },
    config: {
      stylistic: {
        'indent': 2,
        'quotes': 'single',
        'semi': true,
        'arrowParens': true,
        'quoteProps': 'consistent',
        'commaDangle': 'always',
        'object-curly-newline': [
          'error',
          {
            ObjectExpression: {
              multiline: true,
            },
            ObjectPattern: {
              multiline: true,
            },
            ImportDeclaration: 'never',
            ExportDeclaration: {
              multiline: true,
            },
          },
        ],
      },
    },
  },
},);
