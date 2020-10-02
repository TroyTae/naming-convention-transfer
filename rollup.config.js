const pkg = require('./package.json');
const fs  = require('fs-extra');
const {terser} = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const {kebabToPascal} = require('naming-convention-transfer');

const input = 'src/index.ts';

function createConfig({ pkg, input, format, file }) {
  return {	
    input,
    output: {
      file,
      format,
      exports: 'auto',
      name: kebabToPascal(pkg.name)
    },	
    plugins: [typescript(), terser()]
  };	
}

fs.emptyDirSync('./dist');

module.exports = [
  createConfig({ pkg, input, format: 'cjs', file: pkg.main }),
  createConfig({ pkg, input, format: 'esm', file: pkg.module }),
  createConfig({ pkg, input, format: 'iife', file: `dist/${pkg.name}.js` })
];
