import base from '../../base';
import parseResponse from './parseResponse';
import ResponseApi from '../response/responseApi';

const PATH = '/best';

const best = async ( input?: { year?: number; month?: number; page?: number }): Promise<ResponseApi> => {
  if (!input) input = { year: undefined, month: undefined, page: undefined };
  if (!input.year) input.year = new Date().getFullYear();
  
  if (!input.month) input.month = new Date().getMonth(); // Date.getMonth is zero based
  if (!input.page && input.page !== 0) input.page = 1;
  
  if (!input || !input.page || input.page < 1 || input.page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${input.page}`);
  }
  
  const url = `${base.BASE_URL}${PATH}/${input.year}-${input.month.toString().padStart(2,"0")}/${input.page === 0 ? '' : input.page}`;
  const request = base.createRequest({ url });

  return parseResponse(input.page, await request.get(url));
};

export default best;
