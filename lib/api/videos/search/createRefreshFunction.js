const refreshFunction = (keyword, currentPage) => () => {
  const search = require('./search');
  return search({ key: keyword, page: currentPage });
};

const createRefreshFunction = (keyword, pagination) => {
  const { page } = pagination;

  return refreshFunction(keyword, page);
};

module.exports = createRefreshFunction;
