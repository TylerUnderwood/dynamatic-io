'use strict'
import tokens from "./tokens";

const defaultTokens = tokens;

const tokensNative = ( tokens = defaultTokens ) => {
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

console.log("02 - TOKENS_NATIVE");
console.log(tokensNative(defaultTokens()));

export default tokensNative;
