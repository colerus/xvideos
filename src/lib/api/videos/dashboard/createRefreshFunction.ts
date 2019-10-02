import dashboard from "./dashboard";
import ResponseApi from "../response/responseApi";

const refreshFunction = ({ page }: { page?: number }) => (): Promise<ResponseApi> => {
  return dashboard({ page });
};

const createRefreshFunction = (pagination: { page: number; pages: number[] }): () => Promise<ResponseApi> => {
  const { page } = pagination;

  return refreshFunction({ page });
};

export default createRefreshFunction;
