// json schema for ajv
// POST data for division comes as x-www-form-urlencoded strings
// this schema is NOT USED

const divisionSchema = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    divider: { type: 'string' },
  },
  required: ['number', 'divider'],
};

module.exports = divisionSchema;
