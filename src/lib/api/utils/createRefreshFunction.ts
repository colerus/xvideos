import ResponseApi from "../videos/response/responseApi";

const refreshFunction = (currentPage: number, callback: Function, keyword?: string) => (): Promise<ResponseApi> => {
  return callback({ key: keyword, page: currentPage });
};

const createRefreshFunction = (pagination: { page: number; pages?: number[] }, callback: Function, keyword?: string): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunction(page, callback, keyword);
};

export default createRefreshFunction;
