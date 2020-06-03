/* eslint-disable quotes, comma-dangle */
const { validation } = require('./util');

describe('jobs.config schema', () => {
  it('daily', () => validation({
    "jobs": [
      {
        "functionLocation": "/function_location.js",
        "functionName": "function_name",
        "executionConfig": {
          "time": "00:00"
        }
      }
    ]
  }));

  it('weekly', () => validation({
    "jobs": [
      {
        "functionLocation": "/function_location.js",
        "functionName": "function_name",
        "executionConfig": {
          "time": "00:00",
          "dayOfWeek": "Monday"
        }
      }
    ]
  }));

  it('monthly', () => validation({
    "jobs": [
      {
        "functionLocation": "/function_location.js",
        "functionName": "function_name",
        "executionConfig": {
          "time": "00:00",
          "dateInMonth": 1
        }
      }
    ]
  }));

  it('every hour', () => validation({
    "jobs": [
      {
        "functionLocation": "/function_location.js",
        "functionName": "function_name",
        "executionConfig": {
          "cronExpression": "0 * * * *"
        }
      }
    ]
  }));

  it('property description', () => validation({
    "jobs": [
      {
        "functionLocation": "/x.js",
        "functionName": "y",
        "description": "x",
        "executionConfig": {
          "time": "00:00"
        }
      }
    ]
  }));
});
