/* eslint-disable quotes, comma-dangle */
const { shouldBeError } = require('./util');

describe('errors', () => {
  it('should NOT have fewer than 1 items', () => {
    shouldBeError({}, /should have required property 'jobs'/);
  });

  it('should NOT have fewer than 1 items', () => {
    shouldBeError({
      "jobs": []
    }, /should NOT have fewer than 1 items/);
  });

  it('should NOT have more than 20 items', () => {
    shouldBeError({
      "jobs": Array(21).fill(0).map(() => {
        return {
          "functionLocation": "/util.js",
          "functionName": "run",
          "executionConfig": {
            "time": "00:00"
          }
        };
      }),
    }, /should NOT have more than 20 items/);
  });

  it('should have required property `functionLocation`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionName": "function_name",
          "executionConfig": {
            "time": "00:00"
          }
        }
      ]
    }, /should have required property 'functionLocation'/);
  });

  it('should have required property `functionName`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/function_location.js",
          "executionConfig": {
            "time": "00:00"
          }
        }
      ]
    }, /should have required property 'functionName'/);
  });

  it('should have required property `executionConfig`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/function_location.js",
          "functionName": "function_name",
        }
      ]
    }, /should have required property 'executionConfig'/);
  });

  it('should have required property `jobs`', () => {
    shouldBeError({}, /should have required property 'jobs'/);
  });

  it('should NOT have additional properties', () => {
    shouldBeError({
      "x": "y",
      "jobs": [
        {
          "functionLocation": "/x.js",
          "functionName": "y",
          "description": "d",
          "executionConfig": {
            "time": "00:00"
          }
        }
      ]
    }, /should NOT have additional properties, but found 'x'/);
  });

  it('jobs should NOT have additional properties', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/z.jsw",
          "functionName": "a",
          "executionConfig": {
            "cronExpression": "0 * * * *"
          }
        },
        {
          "abc": 123
        }
      ]
    }, /should NOT have additional properties, but found 'abc'/);
  });

  it('executionConfig should NOT have additional properties', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/z.jsw",
          "functionName": "a",
          "executionConfig": {
            "xyz": "abc",
            "cronExpression": "0 * * * *"
          }
        },
      ]
    }, /should NOT have additional properties, but found 'xyz'/);
  });
});
