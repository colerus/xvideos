const hasPreviousFunction = (currentPage: number, pages: number[]) => {
  return currentPage > Math.min(...pages);
};

const createHasPreviousFunction = (pagination: {page: number, pages: number[]}) => {
  return hasPreviousFunction(pagination.page, pagination.pages);
};

export default createHasPreviousFunction;
