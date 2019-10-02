import { best } from "../../videos";
import ResponseApi from "../response/responseApi";

const previousFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return best({ page: previous });
};

const createPreviousFunction = (pagination: { page: number; pages: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunction(page);
};

export default createPreviousFunction;
