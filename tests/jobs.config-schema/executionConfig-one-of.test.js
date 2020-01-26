/* eslint-disable quotes, comma-dangle */

const { shouldBeError } = require('./util');

describe('executionConfig required', () => {
  it('should match exactly one schema `time` or `cronExpression`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "description": "",
          "executionConfig": {
            "time": "00:00",
            "cronExpression": "0 * * * *"
          }
        }
      ]
    }, /executionConfig should match exactly one schema in oneOf/);
  });
});
