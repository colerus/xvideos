import base from '../../base';
import ResponseApi from '../response/responseApi';
import { parseResponse } from '../../utils/parseResponses';
import { validatePage } from '../../utils/utils';

const PATH = '/best';

const best = async (input?: { year?: number; month?: number; page?: number }): Promise<ResponseApi> => {
  if (!input) input = { year: undefined, month: undefined, page: undefined };
  if (!input.year) input.year = new Date().getFullYear();

  if (!input.month) input.month = new Date().getMonth(); // Date.getMonth is zero based

  input.page = validatePage(input.page);

  const url = `${base.BASE_URL}${PATH}/${input.year}-${input.month.toString().padStart(2, '0')}/${
    input.page === 0 ? '' : input.page
  }`;
  const request = base.createRequest({ url });

  return parseResponse(input.page, await request.get(url), best);
};

export default best;
