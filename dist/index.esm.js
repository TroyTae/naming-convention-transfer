/**
 * @author TroyTae
 * @version 1.0.2
 * @name naming-convention-transfer
 */
var KEBAB_CASE_KEYWORD = '-';
var SNAKE_CASE_KEYWORD = '_';
var CAPITAL_LETTER_REGEXP = /[A-Z]/g;
var keywordToUpperCase = function (v) {
    return v[1].toUpperCase();
};
function camelToPascal(camelCaseString) {
    return camelCaseString[0].toUpperCase() + camelCaseString.slice(1);
}
function camelToKebab(camelCaseString) {
    return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function (v) {
        return KEBAB_CASE_KEYWORD + v.toLowerCase();
    });
}
function camelToSnake(camelCaseString) {
    return camelCaseString.replace(CAPITAL_LETTER_REGEXP, function (v) {
        return SNAKE_CASE_KEYWORD + v.toLowerCase();
    });
}
function pascalToCamel(pascalCaseString) {
    return pascalCaseString[0].toLowerCase() + pascalCaseString.slice(1);
}
function pascalToKebab(pascalCaseString) {
    return camelToKebab(pascalToCamel(pascalCaseString));
}
function pascalToSnake(pascalCaseString) {
    return camelToSnake(pascalToCamel(pascalCaseString));
}
function kebabToSnake(kebabCaseString) {
    return kebabCaseString.replace(/-/g, SNAKE_CASE_KEYWORD);
}
function kebabToCamel(kebabCaseString) {
    return kebabCaseString.replace(/-\w/g, keywordToUpperCase);
}
function kebabToPascal(kebabCaseString) {
    return camelToPascal(kebabToCamel(kebabCaseString));
}
function snakeToKebab(snakeCaseString) {
    return snakeCaseString.replace(/_/g, KEBAB_CASE_KEYWORD);
}
function snakeToCamel(snakeCaseString) {
    return snakeCaseString.replace(/_\w/g, keywordToUpperCase);
}
function snakeToPascal(snakeCaseString) {
    return camelToPascal(snakeToCamel(snakeCaseString));
}

export { camelToKebab, camelToPascal, camelToSnake, kebabToCamel, kebabToPascal, kebabToSnake, pascalToCamel, pascalToKebab, pascalToSnake, snakeToCamel, snakeToKebab, snakeToPascal };
