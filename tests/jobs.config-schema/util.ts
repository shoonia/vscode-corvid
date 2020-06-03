const { matchers } = require('jest-json-schema');
const schema = require('../../schema/jobs.config-schema.json');

expect.extend(matchers);

exports.validation = (config) => expect(config).toMatchSchema(schema),

exports.shouldBeError = (invalidData, message) => {
  expect(() => {
    expect(invalidData).toMatchSchema(schema);
  }).toThrowError(message);
}
