// json schema for ajv

const squareSchema = {
  type: 'object',
  properties: {
    numbers: { type: 'array', items: { type: 'number', maximum: Number.MAX_SAFE_INTEGER, minimum: Number.MIN_SAFE_INTEGER } },
    remove_negatives: { type: 'boolean' },
  },
  required: ['numbers'],
};

module.exports = squareSchema;
