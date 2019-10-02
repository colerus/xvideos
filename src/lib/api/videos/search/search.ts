import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponse } from '../../utils/parseResponses';
import { validatePage } from '../../utils/utils';

const PATH = '/?k=';

const search = async (input: { key: string; page?: number }): Promise<ResponseApi> => {
  if (!input.key) {
    throw new Error('Invalid search keyword.');
  }
  input.page = validatePage(input.page);

  const url = `${PATH}${input.key}&p=${input.page}`;
  const request = base.createRequest();

  return parseResponse(input.page, await request.get(url), search, input.key);
};

export default search;
