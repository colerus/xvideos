import search from "./search";
import ResponseApi from "../response/responseApi";
const nextFunction = (keyword: string, currentPage: number) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return search({ key: keyword, page: next });
};

const createNextFunction = (keyword: string, pagination: { page: number; pages?: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(keyword, page);
};

export default createNextFunction;
