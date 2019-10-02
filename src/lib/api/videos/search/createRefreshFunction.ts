import search from "./search";

const refreshFunction = (keyword: string, currentPage: number) => () => {
  return search({ key: keyword, page: currentPage });
};

const createRefreshFunction = (keyword: string, pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return refreshFunction(keyword, page);
};

export default createRefreshFunction;
