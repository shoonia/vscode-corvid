/* eslint-env node */
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

const isProd = !process.env.ROLLUP_WATCH;
const extensions = ['.ts'];

export default {
  input: './src/extension.ts',
  output: {
    file: './dist/extension.js',
    format: 'cjs',
    sourcemap: false,
  },
  external: [
    'fs',
    'path',
    'vscode',
  ],
  watch: {
    include: './src/**',
  },
  plugins: [
    babel({
      presets: [
        '@babel/preset-typescript',
      ],
      exclude: /node_modules/,
      extensions,
    }),
    commonjs({
      extensions,
    }),
    json(),
    isProd && terser({
      ecma: 8,
      module: true,
      toplevel: true,
      parse: {
        ecma: 8,
      },
      compress: {
        ecma: 8,
        warnings: false,
        comparisons: false,
        inline: 2,
        drop_console: true,
        passes: 3,
        unsafe_methods: true,
        module: true,
        toplevel: true,
        pure_getters: true,
        unsafe: true,
        unsafe_math: true,
      },
      output: {
        ecma: 8,
        comments: false,
      },
    }),
  ],
};
