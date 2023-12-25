import _ from 'lodash';

export default class ObjectSchema {
  constructor(shapes) {
    this.validators = shapes;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }

    const iter = (val, key, schema) => {
      if (typeof val !== 'object' || Array.isArray(val) || val === null) {
        return schema[key].isValid(val);
      }
      const innerKeys = Object.keys(val);
      const validator = schema[key];
      return innerKeys.map((k) => iter(val[k], k, validator));
    };
    return _.flattenDeep(keys.map((key) => iter(value[key], key, this.validators)))
      .every((val) => val);
  }
}
