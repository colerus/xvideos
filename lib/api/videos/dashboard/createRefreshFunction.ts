import dashboard from "./dashboard";

const refreshFunction = ({ page }: { page?: number }) => () => {
  return dashboard({ page });
};

const createRefreshFunction = (pagination: { page: number; pages: number[]; }) => {
  const { page } = pagination;

  return refreshFunction({ page });
};

export default createRefreshFunction;
