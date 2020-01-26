const { matchers } = require('jest-json-schema');
const schema = require('../../schema/jobs.config-schema.json');

expect.extend(matchers);

module.exports = {
  validation: (config) => expect(config).toMatchSchema(schema),

  shouldBeError: (invalidData) => expect(() => {
    expect(invalidData).toMatchSchema(schema);
  }).toThrowError(),
};
