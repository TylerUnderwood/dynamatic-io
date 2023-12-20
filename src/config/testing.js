
const tokenCategories = ( theme ) => {
  let categories = {}; // an object of { category: variables }
  let variables = {}; // an object of { token: variable }

  for ( const category in theme ) {
    let tokens = theme[category];

    const addToken = ( name, value ) => {
        if (typeof value === 'object' && value !== null) {
            for ( const item in value ) {
                let nextName = "";
                if ( item !== "DEFAULT" ) {
                    nextName = '-' + item;
                }
                addToken( name + nextName, value[item] );
            }
        } else if ( typeof value === 'string' ) {
            variables[name] = value;
        }
    }

    for ( const token in tokens ) {
        let prefix = '';
        let blocklist = ["color", "import", "other"];

        // Only add categories to prefixes that are not in the blocklist
        if ( blocklist.some(word => category.includes(word)) ) {
            prefix = token;
        } else if ( category === 'DEFAULT' ) {
            prefix = 'theme-' + token;
        } else if ( token === 'DEFAULT' ) {
            prefix = category;
        } else {
            prefix = category + '-' + token;
        }

        addToken( prefix, tokens[token] );
    }

    categories[category] = variables;
    variables = {};
  }

  return categories;
};

const tokensNative = ( theme ) => {
    let tokens = tokenCategories(theme);
    let categories = {};
    let variables = [];

    for ( const category in tokens ) {
        let values = tokens[category];

        for ( const key in values ) {
            if (category === "import") {
                variables.push(values[key]);
            } else {
                variables.push(`--${key}: ${values[key]};`);
            }
        };

        categories[category] = variables;

        variables = [];
    }

    return categories;
};

const tokenBuilderr = ( theme ) => {
    let tokens = tokensNative(theme);
    let themeCSS = '';
    let schemeColors = {};

    const tokenList = ( category ) => {
        let tokensStyles = '';
        category.forEach((token, index) => {
            if (/^theme/.test(token)) {
                schemeColors[token] = token;
            } else {
                tokensStyles += token + (index < category.length - 1 ? '\n  ' : '');
            }
        });
        return tokensStyles;
    }

    const importList = ( imports ) => {
        let importStyles = '';
        imports.forEach((item, index) => {
           importStyles += `@import url('${item}');\n`;
        });
        return importStyles;
    }

    const addCategoryStyles = ( category, categoryName, rule ) => {
        if ( categoryName === 'import' ) {
            themeCSS = importList(tokens[category]) + themeCSS;
        } else {
            themeCSS += `
/* ${categoryName} */
${rule} {
  ${tokenList( tokens[category] )}
}\n`
        }
    };

    for ( const category in tokens ) {
        if ( category === "DEFAULT" ) {
            addCategoryStyles(category, "theme", ":root");
        } else {
            addCategoryStyles(category, category, ":root");
        }
    };

    addCategoryStyles(schemeColors, "scheme colors", "[data-scheme]");

    return themeCSS;
}

export { tokenCategories, tokensNative, tokenBuilderr };
