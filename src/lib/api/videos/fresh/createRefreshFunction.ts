import fresh from "./fresh";

const refreshFunction = ({ page }: { page: number }) => () => {
  return fresh({ page });
};

const createRefreshFunction = (pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return refreshFunction({ page });
};

export default createRefreshFunction;
