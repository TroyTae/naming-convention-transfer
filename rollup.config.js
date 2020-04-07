const pkg = require('./package.json');
const {createUniversalConfigs} = require('troyjs/rollup');
const {clearDirectory} = require('troyjs/node');

clearDirectory('./dist');

module.exports = createUniversalConfigs({
  input: 'src/index.ts',
  package: pkg
});
