import verified from "./verified";

const refreshFunction = (currentPage: number) => () => {
  return verified({ page: currentPage });
};

const createRefreshFunction = (pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return refreshFunction(page);
};

export default createRefreshFunction;
