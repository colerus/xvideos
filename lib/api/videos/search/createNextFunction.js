const nextFunction = (keyword, currentPage) => () => {
  const search = require('./search');

  const next = currentPage + 1;
  return search({ key: keyword, page: next });
};

const createNextFunction = (keyword, pagination) => {
  const { page } = pagination;

  return nextFunction(keyword, page);
};

module.exports = createNextFunction;
