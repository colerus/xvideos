import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponse } from '../../utils/parseResponses';

const PATH = '/verified/videos';

const dashboard = async ({ page = 1 } = {}): Promise<ResponseApi> => {
  if (page < 1 || page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${page}`);
  }

  const url = `${PATH}/${page === 0 ? '' : page}`;
  const request = base.createRequest();

  return parseResponse(page, await request.get(url), dashboard);
};

export default dashboard;
