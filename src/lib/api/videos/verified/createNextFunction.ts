import verified from "./verified";

const nextFunction = (currentPage: number) => () => {
  const next = currentPage + 1;
  return verified({ page: next });
};

const createNextFunction = (pagination: { page: number; pages?: number[]; }) => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
