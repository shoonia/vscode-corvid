import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/extension.js',
  output: {
    file: './dist/extension.js',
    format: 'cjs',
    sourcemap: false,
  },
  external: [
    'vscode',
  ],
  plugins: [
    commonjs(),
  ],
  watch: {
    include: './src/**',
  },
};
