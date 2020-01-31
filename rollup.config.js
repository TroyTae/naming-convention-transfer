const pkg = require('./package.json');
const { createConfig, clearDirectory } = require('rollup-config-troy-recommended');

clearDirectory('./dist');

module.exports = [
  createConfig('cjs', pkg),
  createConfig('esm', pkg),
  createConfig('iife', pkg)
];
