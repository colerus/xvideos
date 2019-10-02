import ResponseApi from "../videos/response/responseApi";

const refreshFunction = (currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  return callback({ page: currentPage });
};

export const createRefreshFunction = (pagination: { page: number; pages: number[] }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunction(page, callback);
};

const refreshFunctionWithKeyword = (keyword: string, currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  return callback({ key: keyword, page: currentPage });
};

export const createRefreshFunctionWithKeyword = (keyword: string, pagination: { page: number; pages?: number[] }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunctionWithKeyword(keyword, page, callback);
};
