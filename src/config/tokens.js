'use strict'
import pluralize from 'pluralize';
import theme from './theme.json';

const defaultTheme = theme;

const tokens = ( theme = defaultTheme ) => {
  let categories = {}; // an object of { category: variables }
  let variables = {}; // an object of { token: variable }

  for ( const category in theme ) {
    let tokens = theme[category];

    const addToken = ( name, value ) => {
      if (typeof value === 'object' && value !== null) {
        for ( const item in value ) {
          let nextName = "";
          if ( item !== "DEFAULT" ) {
            nextName = '-' + pluralize(item, 1);
          }
          addToken( name + nextName, value[item] );
        }
      } else if ( typeof value === 'string' ) {
        variables[name] = value;
      }
    }

    for ( const token in tokens ) {
      let prefix = '';
      let blocklist = ["color", "markup"];

      // Only add categories to prefixes that are not in the blocklist
      if ( blocklist.some(word => category.includes(word)) ) {
        prefix = token;
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

console.log("00 - THEME");
console.log(defaultTheme);
console.log("01 - TOKENS");
console.log(tokens());

export default tokens;
