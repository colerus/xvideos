import ResponseApi from "../videos/response/responseApi";

const previousFunction = (currentPage: number, callback: Function, keyword?: string) => (): Promise<ResponseApi> => {
  const previous = currentPage - 1;
  return callback({ key: keyword, page: previous });
};

const createPreviousFunction = (pagination: { page: number; pages?: number[] }, callback: Function, key?: string): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return previousFunction(page, callback, key);
};

export default createPreviousFunction;
