const hasPreviousFunction = (currentPage: number, pages: number[]): boolean => {
  return currentPage > Math.min(...pages);
};

const createHasPreviousFunction = (pagination: { page: number; pages: number[] }): boolean => {
  return hasPreviousFunction(pagination.page, pagination.pages);
};

export default createHasPreviousFunction;
