import best from "./best";
const nextFunction = (currentPage: number) => () => {
  const next = currentPage + 1;
  return best({ page: next });
};

const createNextFunction = (pagination: { page: number }) => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
