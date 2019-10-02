import ResponseApi from "../videos/response/responseApi";

const nextFunction = (currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return callback({ page: next });
};

export const createNextFunction = (pagination: { page: number }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(page, callback);
};

const nextFunctionWithKeyword = (keyword: string, currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return callback({ key: keyword, page: next });
};

export const createNextFunctionWithKeyword = (keyword: string, pagination: { page: number; pages?: number[] }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunctionWithKeyword(keyword, page, callback);
};
