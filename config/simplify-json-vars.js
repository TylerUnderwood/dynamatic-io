'use strict'
import pluralize from 'pluralize';

const simplifyVars = ( theme ) => {
  let variables = {}

  const addVars = ( obj, prefix ) => {
    for ( const key in obj ) {
      let value = obj[key];

      if (typeof value === 'object' && value !== null) {
        addVars(value, (prefix + `${pluralize(key, 1)}-`));
      } else if (typeof value === 'array' && value !== null) {
        value.forEach((item, index) => addVars(item, prefix + toString(index)) );
      } else {
        variables[prefix + key] = value;
      }
    };
  }

  addVars(theme, '');

  return variables;
};

export default simplifyVars;
