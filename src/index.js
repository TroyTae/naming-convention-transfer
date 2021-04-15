const KEBAB_CASE_KEYWORD = "-";
const SNAKE_CASE_KEYWORD = "_";
const CAPITAL_LETTER_REGEXP = /[A-Z]/g;

function keywordToUpperCase(str) {
  return str[1].toUpperCase();
}

export function camelToPascal(camelCaseString) {
  return camelCaseString[0].toUpperCase() + camelCaseString.slice(1);
}
export function camelToKebab(camelCaseString) {
  return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function (v) {
    return KEBAB_CASE_KEYWORD + v.toLowerCase();
  });
}
export function camelToSnake(camelCaseString) {
  return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function (v) {
    return SNAKE_CASE_KEYWORD + v.toLowerCase();
  });
}
export function pascalToCamel(pascalCaseString) {
  return pascalCaseString[0].toLowerCase() + pascalCaseString.slice(1);
}
export function pascalToKebab(pascalCaseString) {
  return camelToKebab(pascalToCamel(pascalCaseString));
}
export function pascalToSnake(pascalCaseString) {
  return camelToSnake(pascalToCamel(pascalCaseString));
}
export function kebabToSnake(kebabCaseString) {
  return kebabCaseString.replace(/-/g, SNAKE_CASE_KEYWORD);
}
export function kebabToCamel(kebabCaseString) {
  return kebabCaseString.replace(/-\w/g, keywordToUpperCase);
}
export function kebabToPascal(kebabCaseString) {
  return camelToPascal(kebabToCamel(kebabCaseString));
}
export function snakeToKebab(snakeCaseString) {
  return snakeCaseString.replace(/_/g, KEBAB_CASE_KEYWORD);
}
export function snakeToCamel(snakeCaseString) {
  return snakeCaseString.replace(/_\w/g, keywordToUpperCase);
}
export function snakeToPascal(snakeCaseString) {
  return camelToPascal(snakeToCamel(snakeCaseString));
}
