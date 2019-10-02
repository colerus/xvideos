const hasNextFunction = (currentPage: number, pages: number[]) => () => {
  return currentPage < Math.max(...pages);
};

const createHasNextFunction = (pagination: { page: number; pages: number[]; }) => {
  return hasNextFunction(pagination.page, pagination.pages);
};

export default createHasNextFunction;
