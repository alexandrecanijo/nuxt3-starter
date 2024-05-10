// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';
import path from 'node:path';

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

  imports: {
    autoImport: true,
    injectAtEnd: true,
    dirs: ['./stores'],
  },

  css: ['@/assets/styles/scss/themes.scss', '@/assets/styles/scss/reset.scss', '@/assets/styles/main.scss'],

  vite: {
    build: {
      sourcemap: true,
      assetsDir: 'assets/',
      target: 'esnext',
    },
    root: 'src',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/_variables.scss" as *;',
        },
      },
    },
    server: {
      open: false,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '~': path.resolve(__dirname, './src/'),
      },
    },
  },
});
