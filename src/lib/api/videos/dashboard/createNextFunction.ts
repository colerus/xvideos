import dashboard from "./dashboard";

const nextFunction = (currentPage: number) => () => {
  const next = currentPage + 1;
  return dashboard({ page: next });
};

const createNextFunction = (pagination: { page: number; pages: number[]; }) => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
