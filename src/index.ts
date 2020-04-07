const KEBAB_CASE_KEYWORD = '-';
const SNAKE_CASE_KEYWORD = '_';
const CAPITAL_LETTER_REGEXP = /[A-Z]/g;

const keywordToUpperCase = function(v: string): string {
  return v[1].toUpperCase();
};

// camel case
function camelToPascal(camelCaseString: string): string {
  return camelCaseString[0].toUpperCase() + camelCaseString.slice(1);
}
function camelToKebab(camelCaseString: string): string {
  return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function(v) {
    return KEBAB_CASE_KEYWORD + v.toLowerCase();
  });
}
function camelToSnake(camelCaseString: string): string {
  return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function(v) {
    return SNAKE_CASE_KEYWORD + v.toLowerCase();
  });
}

// pascal case
function pascalToCamel(pascalCaseString: string): string {
  return pascalCaseString[0].toLowerCase() + pascalCaseString.slice(1);
}
function pascalToKebab(pascalCaseString: string): string {
  return camelToKebab(pascalToCamel(pascalCaseString));
}
function pascalToSnake(pascalCaseString: string): string {
  return camelToSnake(pascalToCamel(pascalCaseString));
}

// kabab case
function kebabToSnake(kebabCaseString: string): string {
  return kebabCaseString.replace(/-/g, SNAKE_CASE_KEYWORD);
}
function kebabToCamel(kebabCaseString: string): string {
  return kebabCaseString.replace(/-\w/g, keywordToUpperCase);
}
function kebabToPascal(kebabCaseString: string): string {
  return camelToPascal(kebabToCamel(kebabCaseString));
}

// snake case
function snakeToKebab(snakeCaseString: string): string {
  return snakeCaseString.replace(/_/g, KEBAB_CASE_KEYWORD);
}
function snakeToCamel(snakeCaseString: string): string {
  return snakeCaseString.replace(/_\w/g, keywordToUpperCase);
}
function snakeToPascal(snakeCaseString: string): string {
  return camelToPascal(snakeToCamel(snakeCaseString));
}

export {
  kebabToSnake,
  kebabToCamel,
  kebabToPascal,
  snakeToKebab,
  snakeToCamel,
  snakeToPascal,
  camelToPascal,
  camelToKebab,
  camelToSnake,
  pascalToCamel,
  pascalToKebab,
  pascalToSnake,
};
