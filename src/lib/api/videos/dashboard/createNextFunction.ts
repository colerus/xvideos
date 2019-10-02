import dashboard from "./dashboard";
import ResponseApi from "../response/responseApi";

const nextFunction = (currentPage: number) => (): Promise<ResponseApi> => {
  const next = currentPage + 1;
  return dashboard({ page: next });
};

const createNextFunction = (pagination: { page: number; pages: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return nextFunction(page);
};

export default createNextFunction;
