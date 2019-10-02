import ResponseApi from "../videos/response/responseApi";

const previousFunction = (currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return callback({ page: previous });
};

export const createPreviousFunction = (pagination: { page: number; pages: number[] }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunction(page, callback);
};

const previousFunctionWithKeyword = (keyword: string, currentPage: number, callback: Function) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return callback({ key: keyword, page: previous });
};

export const createPreviousFunctionWithKeyword = (key: string, pagination: { page: number; pages?: number[] }, callback: Function): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunctionWithKeyword(key, page, callback);
};
