import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponseWithKeyword } from '../../utils/parseResponses';

const PATH = '/?k=';

const search = async (input: { key: string; page?: number }): Promise<ResponseApi> => {
  if (!input.key) {
    throw new Error('Invalid search keyword.');
  }
  if (!input.page && input.page !== 0) input.page = 1;  
  if (input.page < 1 || input.page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${input.page}`);
  }

  const url = `${PATH}${input.key}&p=${input.page}`;
  const request = base.createRequest();

  return parseResponseWithKeyword(input.key, input.page, await request.get(url), search);
};

export default search;
