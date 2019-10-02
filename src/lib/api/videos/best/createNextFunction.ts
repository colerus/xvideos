import best from "./best";
import ResponseApi from "../response/responseApi";
const nextFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return best({ page: next });
};

const createNextFunction = (pagination: { page: number }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
