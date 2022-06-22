'use strict'
import tokens from './tokens';

const nativeTokensGenerator = ( tokens ) => {
  let categories = {};
  let variables = [];

  for ( const category in tokens ) {
    let values = tokens[category];

    for ( const key in values ) {
      variables.push(`--${key}: ${values[key]};`);
    };

    categories[category] = variables;

    variables = [];
  }

  return categories;
};

const tokensNative = nativeTokensGenerator(tokens);

export default tokensNative;
