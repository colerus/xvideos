const previousFunction = (keyword, currentPage) => () => {
  const search = require('./search');
  console.log('key previous:', keyword);
  const previous = currentPage - 1;
  return search({ key: keyword, page: previous });
};

const createPreviousFunction = (key, pagination) => {
  const { page } = pagination;

  return previousFunction(key, page);
};

module.exports = createPreviousFunction;
