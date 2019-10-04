import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponse } from '../../utils/parseResponses';
import { validatePage } from '../../utils/utils';

const PATH = '/new';

const fresh = async ({ page = 2 } = {}): Promise<ResponseApi> => {
  page = validatePage(page);

  const url = `${PATH}/${page}`;
  const request = base.createRequest();

  return parseResponse(page, await request.get(url), fresh);
};

export default fresh;
