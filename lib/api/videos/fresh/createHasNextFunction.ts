const hasNextFunction = (currentPage: number, pages: number[]) => () => {
  return currentPage < Math.max(...pages);
};

const createHasNextFunction = (pagination: { page: number; pages: number[]; }) => {
  const { page, pages } = pagination;

  return hasNextFunction(page, pages);
};

export default createHasNextFunction;
