const NamingConventionTransfer = require('../dist/index');

const CAMEL_CASE = 'namingConventionTransfer';
const PASCAL_CASE = 'NamingConventionTransfer';
const SNAKE_CASE = 'naming_convention_transfer';
const KEBAB_CASE = 'naming-convention-transfer';

test('Kebab Case', () => {
  expect(NamingConventionTransfer.kebabToSnake(KEBAB_CASE)).toBe(SNAKE_CASE);
  expect(NamingConventionTransfer.kebabToCamel(KEBAB_CASE)).toBe(CAMEL_CASE);
  expect(NamingConventionTransfer.kebabToPascal(KEBAB_CASE)).toBe(PASCAL_CASE);
});

test('Snake Case', () => {
  expect(NamingConventionTransfer.snakeToKebab(SNAKE_CASE)).toBe(KEBAB_CASE);
  expect(NamingConventionTransfer.snakeToCamel(SNAKE_CASE)).toBe(CAMEL_CASE);
  expect(NamingConventionTransfer.snakeToPascal(SNAKE_CASE)).toBe(PASCAL_CASE);
});

test('Camel Case', () => {
  expect(NamingConventionTransfer.camelToKebab(CAMEL_CASE)).toBe(KEBAB_CASE);
  expect(NamingConventionTransfer.camelToSnake(CAMEL_CASE)).toBe(SNAKE_CASE);
  expect(NamingConventionTransfer.camelToPascal(CAMEL_CASE)).toBe(PASCAL_CASE);
});

test('Pascal Case', () => {
  expect(NamingConventionTransfer.pascalToKebab(PASCAL_CASE)).toBe(KEBAB_CASE);
  expect(NamingConventionTransfer.pascalToSnake(PASCAL_CASE)).toBe(SNAKE_CASE);
  expect(NamingConventionTransfer.pascalToCamel(PASCAL_CASE)).toBe(CAMEL_CASE);
});
