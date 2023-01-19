import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: [
      {
        find: /^#shared\/(.*)\.js/,
        replacement: path.resolve(__dirname, './src/shared/$1.ts'),
      },
      {
        find: /^#globals\/(.*)\.js/,
        replacement: path.resolve(__dirname, './src/globals/$1.default.ts'),
      },
    ],
  },
});
