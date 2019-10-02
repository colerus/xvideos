function hasNextFunction(currentPage: number, pages: number[]): boolean {
  return currentPage < Math.max(...pages);
}

const createHasNextFunction = (pagination: { page: number; pages: number[] }): boolean => {
  return hasNextFunction(pagination.page, pagination.pages);
};

export default createHasNextFunction;
