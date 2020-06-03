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

  it('should not be `time` with `dateInMonth` and `dayOfWeek`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "time": "00:00",
            "dateInMonth": 1,
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be only `dayOfWeek`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be only `dateInMonth`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "dateInMonth": 1
          }
        }
      ]
    });
  });

  it('should not be `dateInMonth` with `dayOfWeek`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "dateInMonth": 1,
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be `cronExpression` with `dayOfWeek`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "cronExpression": "0 * * * *",
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be `cronExpression` with `dateInMonth`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "cronExpression": "0 * * * *",
            "dateInMonth": 1
          }
        }
      ]
    });
  });

  it('should not be `cronExpression` with `dayOfWeek` and `dateInMonth`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "cronExpression": "0 * * * *",
            "dateInMonth": 1,
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be `cronExpression` with `time` and `dayOfWeek`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "cronExpression": "0 * * * *",
            "time": "00:00",
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be `cronExpression` with `time` and `dateInMonth`', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "cronExpression": "0 * * * *",
            "time": "00:00",
            "dateInMonth": 1
          }
        }
      ]
    });
  });

  it('should not be together', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "executionConfig": {
            "time": "00:00",
            "cronExpression": "0 * * * *",
            "dateInMonth": 1,
            "dayOfWeek": "Monday"
          }
        }
      ]
    });
  });

  it('should not be empty', () => {
    shouldBeError({
      "jobs": [
        {
          "functionLocation": "/",
          "functionName": ".js",
          "description": "",
          "executionConfig": {}
        }
      ]
    });
  });
});
