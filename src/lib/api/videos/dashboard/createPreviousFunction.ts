import dashboard from "./dashboard";
import ResponseApi from "../response/responseApi";

const previousFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return dashboard({ page: previous });
};

const createPreviousFunction = (pagination: { page: number }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunction(page);
};

export default createPreviousFunction;
