import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  string() {
    return new StringSchema([(str) => typeof str === 'string']);
  }

  function() {
    return new FunctionSchema([(val) => typeof val === 'function']);
  }

  object() {
    return new ObjectSchema();
  }
}

export default Validator;

const expectedValue = null;
console.log(!expectedValue);
