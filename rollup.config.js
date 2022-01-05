import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

const extensions = ['.ts'];

export default {
  input: './src/extension.ts',
  output: {
    file: './dist/extension.js',
    format: 'cjs',
    sourcemap: false,
    interop: false,
    esModule: false,
    generatedCode: {
      constBindings: true,
    },
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
      babelHelpers: 'bundled',
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
  ],
};
