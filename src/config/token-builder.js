'use strict'
import theme from './theme.json';
import tokens from "./tokens";

const defaultTheme = theme;
const tokenCategories = tokens;

const tokensNative = ( theme = defaultTheme ) => {
    let tokens = tokenCategories(theme);
    let categories = {};
    let variables = [];

    for ( const category in tokens ) {
        let values = tokens[category];

        for ( const key in values ) {
            if (category === "DEFAULT") {
                let newValue = values[key].replace("theme", "light");
                let newKey = key.replace("DEFAULT", "theme");
                variables.push(`--${newKey}: var(${newValue});`);
            } else if (/^--/.test(values[key])) {
                variables.push(`--${key}: var(${values[key]});`);
            } else {
                variables.push(`--${key}: ${values[key]};`);
            }
        };

        categories[category] = variables;

        variables = [];
    }

    return categories;
};

const tokenBuilder = ( theme = defaultTheme ) => {
    let tokens = tokensNative(theme);
    let themeCSS = '';

    const tokenList = ( category ) => {
        let tokensStyles = '';
        category.forEach((token, index) => {
            tokensStyles += token + (index < category.length - 1 ? '\n  ' : '');
        });
        return tokensStyles;
    }

    const addCategoryStyles = ( category, categoryName, rule ) => {
        themeCSS += `
/* ${categoryName} */
${rule} {
  ${tokenList( tokens[category] )}
}\n`
    };

    for ( const category in tokens ) {
        if ( category === "theme" ) {
            addCategoryStyles(category, "Theme", ":root");
        } else {
            addCategoryStyles(category, category, ":root");
        }
    };

    return themeCSS;
}

console.log("02 - TOKENS_NATIVE");
console.log(tokensNative());
console.log("03 - TOKEN_BUILDER");
console.log(tokenBuilder());

export default tokenBuilder;
