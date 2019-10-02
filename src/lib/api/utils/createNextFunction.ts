import ResponseApi from "../videos/response/responseApi";

const nextFunction = (currentPage: number, callback: Function, keyword?: string) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return callback({ key: keyword, page: next });
};

const createNextFunction = (pagination: { page: number; pages?: number[] }, callback: Function, keyword?: string): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(page, callback, keyword);
};

export default createNextFunction;
