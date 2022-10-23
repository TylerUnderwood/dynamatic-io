'use strict'
import pluralize from 'pluralize';
import theme from './theme.json';

const themeTokensGenerator = ( theme ) => {
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
      let blocklist = ["color", "mode"];

      // Only add new prefixes that are not in the blocklist
      if ( category === "DEFAULT" ) {
        prefix = 'theme-' + token;
      } else if ( !blocklist.some(word => category.includes(word)) ) {
        prefix = pluralize(category, 1) + '-' + token;
      } else {
        prefix = token;
      }

      addToken( prefix, tokens[token] );
    }

    categories[category] = variables;
    variables = {};
  }

  return categories;
};

const tokens = themeTokensGenerator(theme);

export default tokens;
