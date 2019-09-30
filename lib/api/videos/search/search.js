const base = require('../../base');
const parseResponse = require('./parseResponse');

const PATH = '/?k=';

const search = async (input = { key: String, page: 1 }) => {
  if (!input.key) {
    throw new Error('Invalid search keyword.');
  }
  if (input.page < 1 || input.page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${input.page}`);
  }

  const url = `${PATH}${input.key}&p=${input.page}`;
  const request = base.createRequest({
    url,
  });

  return parseResponse(input.key, input.page, await request.get());
};

module.exports = search;
