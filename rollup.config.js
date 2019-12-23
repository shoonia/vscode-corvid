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
    'util',
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
        ascii_only: true,
      },
    }),
  );
}

export default config;
