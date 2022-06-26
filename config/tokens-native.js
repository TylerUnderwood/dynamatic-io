'use strict'
import tokens from './tokens';

const nativeTokensGenerator = ( tokens ) => {
  let categories = {};
  let variables = [];

  for ( const category in tokens ) {
    let values = tokens[category];

    for ( const key in values ) {
      if (/^--/.test(values[key])) {
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

const tokensNative = nativeTokensGenerator(tokens);

export default tokensNative;
