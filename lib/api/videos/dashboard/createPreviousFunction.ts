import dashboard from "./dashboard";
const previousFunction = (currentPage: number) => () => {
  const previous = currentPage - 1;
  return dashboard({ page: previous });
};

const createPreviousFunction = (pagination: { page: number; }) => {
  const { page } = pagination;

  return previousFunction(page);
};

export default createPreviousFunction;
