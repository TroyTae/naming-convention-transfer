[![build](https://img.shields.io/github/workflow/status/TroyTae/naming-convention-transfer/naming-convention-transfer?style=flat-square)](https://github.com/TroyTae/naming-convention-transfer/actions?query=workflow%3Anaming-convention-transfer)
[![size](https://img.shields.io/github/size/TroyTae/naming-convention-transfer/dist/naming-convention-transfer.js?style=flat-square)](https://github.com/TroyTae/naming-convention-transfer/blob/master/dist/naming-convention-transfer.js)
[![npm](https://img.shields.io/npm/v/naming-convention-transfer?color=%23fb3e44&style=flat-square)](https://www.npmjs.com/package/naming-convention-transfer)
[![license](https://img.shields.io/github/license/TroyTae/naming-convention-transfer?style=flat-square)](https://github.com/TroyTae/naming-convention-transfer/blob/master/LICENSE)

# Naming Convention Transfer
Change your naming convention freely!

## Installation

### npm (commonjs)
```shell script
npm install naming-convention-transfer
```

### browser (iife)
Please [download](./dist/naming-convention-transfer.js) this file.  
And embed script tag in your document.
```html
<script src="./dist/naming-convention-transfer.js"></script>
```

## Example

### Nodejs

```javascript
import { pascalToSnake } from 'naming-convention-transfer';

pascalToSnake('NamingConventionTransfer') === 'naming_convention_transfer';
```

### Browser

```javascript
NamingConventionTransfer.camelToKebab('namingConventionTransfer') === 'naming-convention-transfer';
```

## API

Name | Description
--- | ---
`kebabToSnake` | Transfer from `kebab-case` to `snake_case`
`kebabToCamel` | Transfer from `kebab-case` to `camelCase`
`kebabToPascal` | Transfer from `kebab-case` to `PascalCase`
`snakeToKebab` | Transfer from `snake_case` to `kebab-case`
`snakeToCamel` | Transfer from `snake_case` to `camelCase`
`snakeToPascal` | Transfer from `snake_case` to `PascalCase`
`camelToPascal` | Transfer from `camelCase` to `PascalCase`
`camelToKebab` | Transfer from `camelCase` to `kebab-case`
`camelToSnake` | Transfer from `camelCase` to `snake_case`
`pascalToCamel` | Transfer from `PascalCase` to `camelCase`
`pascalToKebab` | Transfer from `PascalCase` to `kebab-case`
`pascalToSnake` | Transfer from `PascalCase` to `snake_case`
