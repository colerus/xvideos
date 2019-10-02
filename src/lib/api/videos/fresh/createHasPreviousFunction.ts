const hasPreviousFunction = (currentPage: number, pages: number[]): boolean => {
  return currentPage > Math.min(...pages);
};

const createHasPreviousFunction = (pagination: { page: number; pages: number[] }): boolean => {
  const { page, pages } = pagination;

  return hasPreviousFunction(page, pages);
};

export default createHasPreviousFunction;
