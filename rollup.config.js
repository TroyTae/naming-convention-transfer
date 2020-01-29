const pkg = require('./package.json');
const fs = require('fs');
const rimraf = require('rimraf');
const {terser} = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const {kebabToPascal} = require('naming-convention-transfer');

const DIST_DIRECTORY_PATH = './dist';
rimraf.sync(DIST_DIRECTORY_PATH);
fs.mkdirSync(DIST_DIRECTORY_PATH);

const createConfig = (format) => {
  const isBrowser = (format === 'iife');
  const file = (function() {
    switch (format) {
      case 'cjs': return pkg.main;
      case 'esm': return pkg.module;
      case 'iife': return `dist/${pkg.name}.js`;
    }
  })();
  return {
    input: 'src/index.ts',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: isBrowser,
      strict : !isBrowser,
      format: format,
      file: file,
      name: kebabToPascal(pkg.name)
    },
    plugins: [
      typescript({ clean: true }),
      isBrowser ? terser() : null
    ].filter(Boolean)
  };
};

module.exports = [
  createConfig('cjs'),
  createConfig('esm'),
  createConfig('iife')
];
