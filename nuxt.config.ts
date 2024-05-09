// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  devtools: {
    enabled: isDev,
    vscode: {},
  },

  telemetry: false,

  srcDir: 'src/',

  modules: ['@nuxt/eslint'],
  eslint: {
    checker: {
      configType: 'flat',
    },
  },
});
