import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponse } from '../../utils/parseResponses';
import { validatePage } from '../../utils/utils';

const PATH = '/verified/videos';

const verified = async ({ page = 1 } = {}): Promise<ResponseApi> => {
  page = validatePage(page);

  const url = `${PATH}/${page === 0 ? '' : page}`;
  const request = base.createRequest();

  return parseResponse(page, await request.get(url), verified);
};

export default verified;
