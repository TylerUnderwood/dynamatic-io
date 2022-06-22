'use strict'
import pluralize from 'pluralize';
import theme from './theme.json';

const themeTokensGenerator = ( theme ) => {
  let categories = {};
  let variables = {}; // and array of { token: variable }
  let isCategory = true;

  const addVars = ( cline, prefix ) => {
    for ( const key in cline ) {
      let value = cline[key];

      if (typeof value === 'object' && value !== null) {
        addVars(value, (prefix + pluralize(key, 1) + '-'));
        isCategory = Object.keys(theme).includes(key);

        if (isCategory) {
          categories[key] = variables;
          variables = {};
        }
      } else {
        variables[prefix + key] = value;
      }
    };
  }

  addVars(theme, '');

  return categories;
};

const tokens = themeTokensGenerator(theme);

export default tokens;
