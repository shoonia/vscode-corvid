import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: './src/extension.js',
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
  plugins: [
    commonjs(),
  ],
  watch: {
    include: './src/**',
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    terser({
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
      },
      output: {
        ecma: 8,
        comments: false,
        ascii_only: true,
      },
    }),
  );
}

export default config;
