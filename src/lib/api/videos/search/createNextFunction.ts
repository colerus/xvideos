import search from "./search";
const nextFunction = (keyword: string, currentPage: number) => () => {
  const next = currentPage + 1;
  return search({ key: keyword, page: next });
};

const createNextFunction = (keyword: string, pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return nextFunction(keyword, page);
};

export default createNextFunction;
