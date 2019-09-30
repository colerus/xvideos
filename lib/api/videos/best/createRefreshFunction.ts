import best from "./best";

const refreshFunction = (currentPage: number) => () => {
  return best({ page: currentPage });
};

const createRefreshFunction = (pagination: { page:number, pages: number[] }) => {
  const { page } = pagination;

  return refreshFunction(page);
};

export default createRefreshFunction;
