import search from "./search";
import ResponseApi from "../response/responseApi";

const refreshFunction = (keyword: string, currentPage: number) => (): Promise<ResponseApi> => {
  return search({ key: keyword, page: currentPage });
};

const createRefreshFunction = (keyword: string, pagination: { page: number; pages?: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunction(keyword, page);
};

export default createRefreshFunction;
