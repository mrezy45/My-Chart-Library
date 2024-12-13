import babel from '@rollup/plugin-babel'; // Use the new Babel plugin
import postcss from 'rollup-plugin-postcss'; // Keep using rollup-plugin-postcss
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // Peer deps plugin
import resolve from '@rollup/plugin-node-resolve'; // Updated resolve plugin
import commonjs from '@rollup/plugin-commonjs'; // Updated commonjs plugin

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), // Handles module resolution for node_modules
    babel({
      exclude: 'node_modules/**', // Exclude node_modules from Babel processing
      babelHelpers: 'bundled',
      configFile: './babel.config.js', // Path to Babel config file
    }),
    commonjs(), // Converts CommonJS modules to ES6
    postcss({
      extract: true,  // Optional: This extracts the CSS into a separate file
    }),
  ],
};
