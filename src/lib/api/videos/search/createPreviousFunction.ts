import search from "./search";
import ResponseApi from "../response/responseApi";

const previousFunction = (keyword: string, currentPage: number) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return search({ key: keyword, page: previous });
};

const createPreviousFunction = (key: string, pagination: { page: number; pages?: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunction(key, page);
};

export default createPreviousFunction;
