// rollup.config.js
// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import sass from 'sass'; // Import the sass module

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        // Use svelte-preprocess here with options
        sourceMap: !production,
        scss: {
          includePaths: ['src/styles'], // Optional, specify the include paths for scss files
        },
        postcss: {
          plugins: [require('autoprefixer')], // Optional, use autoprefixer for CSS
        },
      }),
      compilerOptions: {
        // Enable CSS module support
        css: true,
      },
    }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

