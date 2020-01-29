/* eslint-disable quotes, comma-dangle */

const { shouldBeError, validation } = require('./util');

describe('functionName', () => {
  it('should be valid', () => {
    const names = [
      '$',
      '$name',
      '_name',
      'fn_name',
      'NameFn',
      'name1'
    ];

    names.forEach((name) => {
      validation({
        "jobs": [
          {
            "functionLocation": "/function_/location.js",
            "functionName": name,
            "executionConfig": {
              "time": "01:00"
            }
          }
        ]
      });
    });
  });

  it('should be invalid', () => {
    const names = [
      '',
      ' ',
      '1name',
      '%name',
      'name name',
      'name-name',
      'функція'
    ];

    names.forEach((name) => {
      shouldBeError({
        "jobs": [
          {
            "functionLocation": "/function_/location.js",
            "functionName": name,
            "executionConfig": {
              "time": "01:00"
            }
          }
        ]
      }, /functionName should match pattern/);
    });
  });

});
