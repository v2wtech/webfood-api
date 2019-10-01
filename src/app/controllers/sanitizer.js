/** @description Validates specific object formats with a predefined mask.
 */
class Sanitizer {
  masks = {
    rg: [
      /^\d{2}(\.\d{3}){2}\-\d{1}$/,
      '00.000.000-0'
    ],
    password: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      '1 lowercase, uppercase, numeric & special char with length of 8 chars total.'
    ],
    phone: [
      /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/,
      '(00)00000-0000'
    ]
  };

  constructor () { }

  /* @description    Takes a list of fields and checks if they are suitable to be parsed
   * @param {object} The fields themselves.
   * @returns {string|TypeError}
   */
  verify (fields) {
    if (!(Object.keys(fields) in this.masks))
      throw new TypeError('Unable to sanitize these values: ' + fields);
    else {
      const [ isCorrect, field ] = this.check(fields);

      if (isCorrect)
        return field.value;
      else
        return this.formatError(field);
    }
  }

  /* @description    Throws an error whenever the format of a field is incorrect.
   * @param {object} The field itself.
   * @returns {TypeError}
   */
  formatError(field) {
    throw new TypeError(`The format for the specified field (${field.key}) is incorrect. ` +
                        `Should be: ${this.masks[field.key][1]}`);
  }

  /* @description      Checks whether or not a field has the correct masking.
   * @param {object}   The fields being validated.
   * @returns {object} Returns true if all fields are valid, along with the field itself.
   */
  check (fields) {
    let format, field = {};

    for (let key in fields) {
      if (fields.hasOwnProperty(key)) {
        field = { key: key, value: fields[key] };

        format = Object.keys(this.masks)
          .some(value => format = this.masks[value][0].test(field.value));
      }
    }

    return [format, field];
  }
}

module.exports = { Sanitizer };
