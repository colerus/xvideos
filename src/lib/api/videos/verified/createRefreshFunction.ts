import verified from "./verified";
import ResponseApi from "../response/responseApi";

const refreshFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  return verified({ page: currentPage });
};

const createRefreshFunction = (pagination: { page: number; pages?: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunction(page);
};

export default createRefreshFunction;
