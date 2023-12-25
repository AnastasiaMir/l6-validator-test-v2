export default class StringSchema {
  constructor(vals) {
    this.validators = [...vals];
  }

  isValid(value) {
    const result = this.validators.every((validator) => validator(value) === true);
    console.log(result);
    return result;
  }

  hasSpaces() {
    const newValidator = (value) => /\s/.test(value);
    return new StringSchema([...this.validators, newValidator]);
  }
}
