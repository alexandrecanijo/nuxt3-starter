import { defineVitestConfig } from '@nuxt/test-utils/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineVitestConfig({
  plugins: [
    AutoImport({
      imports: ['vitest', 'vue', 'pinia'],
      dirs: ['./composables', './stores', './components'],
    }),
  ],
  test: {
    setupFiles: ['./tests/unit/setup.js'],
    include: ['**/*/?(*.)+(spec|test).[jt]s'],
    root: './src',
    css: false,
    globals: true,
    clearMocks: true,
    environment: 'nuxt',

    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },

    reporters: ['default'],

    outputFile: {
      json: '<rootDir>/../../coverage/coverage-report.json',
    },

    coverage: {
      enabled: true,
      all: true,
      reporter: ['html', 'json', 'text', 'lcov'],
      reportsDirectory: '<root>/../../coverage',
      exclude: [
        'coverage/**',
        'dist/**',
        'packages/*/test?(s)/**',
        '**/*.d.ts',
        '**/virtual:*',
        '**/__x00__*',
        '**/\x00*',
        'cypress/**',
        'test?(s)/**',
        'test?(-*).?(c|m)[jt]s?(x)',
        '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
        '**/__tests__/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/vitest.{workspace,projects}.[jt]s?(on)',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'nuxt.config.ts',
        'eslint.config.js',
        '.nuxt/**',
        'config/**',
      ],
    },
    onConsoleLog: (log) => {
      // Silence logs coming from vue <Suspense> is experimental, and stdout | unknown component before it
      if (log.includes('<Suspense')) {
        return false;
      }
      return log;
    },
  },
});
