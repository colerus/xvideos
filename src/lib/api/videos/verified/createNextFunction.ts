import verified from "./verified";
import ResponseApi from "../response/responseApi";

const nextFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return verified({ page: next });
};

const createNextFunction = (pagination: { page: number; pages?: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
