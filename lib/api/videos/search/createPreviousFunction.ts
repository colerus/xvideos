import search from "./search";

const previousFunction = (keyword: string, currentPage: number) => () => {
  const previous = currentPage - 1;
  return search({ key: keyword, page: previous });
};

const createPreviousFunction = (key: string, pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return previousFunction(key, page);
};

export default createPreviousFunction;
