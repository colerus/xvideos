const hasPreviousFunction = (currentPage: number, pages: number[]) => () => {
  return currentPage > Math.min(...pages);
};

const createHasPreviousFunction = (pagination: { page: number; pages: number[]; }) => {
  const { page, pages } = pagination;

  return hasPreviousFunction(page, pages);
};

export default createHasPreviousFunction;
