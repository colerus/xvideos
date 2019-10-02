import fresh from "./fresh";

const nextFunction = (currentPage: number) => () => {
  const next = currentPage + 1;
  return fresh({ page: next });
};

const createNextFunction = (pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
