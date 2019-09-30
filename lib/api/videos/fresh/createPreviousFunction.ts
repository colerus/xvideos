import fresh from "./fresh";

const previousFunction = (currentPage: number) => () => {
  const previous = currentPage - 1;
  return fresh({ page: previous });
};

const createPreviousFunction = (pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return previousFunction(page);
};

export default createPreviousFunction;
