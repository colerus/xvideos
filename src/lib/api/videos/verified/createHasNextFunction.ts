const hasNextFunction = (currentPage: number, pages: number[]): boolean => {
  return currentPage < Math.max(...pages);
};

const createHasNextFunction = (pagination: { page: number; pages: number[] }): boolean => {
  const { page, pages } = pagination;

  return hasNextFunction(page, pages);
};

export default createHasNextFunction;
