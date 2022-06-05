'use strict'
import pluralize from 'pluralize';

const simplifyVars = ( theme ) => {
  let variables = {}
  let stack = '';

  const addVars = (obj) => {
    for ( const key in obj ) {
      let value = obj[key];

      if (typeof value === 'object' && value !== null) {
        stack += `${pluralize(key, 1)}-`;
        addVars(value);
      }

      if (typeof value === 'string' && value !== null) {
        variables[stack + key] = value;
      }

      if (Object.keys(obj).pop() === key) {
        stack = '';
      }
    };
  };

  addVars(theme);

  return variables;
};

export default simplifyVars;
