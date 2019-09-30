import base from '../../base';
import parseResponse from './parseResponse';

const PATH = '/best';

const best = (async ( input: { year?: number, month?: number, page?: number }) => {
  if (!input.year) input.year = new Date().getFullYear();
  
  if (!input.month) input.month = new Date().getMonth() + 1; // Date.getMonth is zero based
  
  if (!input.page) input.page = 1;
  
  if (input.page < 1 || input.page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${input.page}`);
  }

  const url = `${PATH}/${input.year}-${input.month}/${input.page === 0 ? '' : input.page}`;
  const request = base.createRequest();

  return parseResponse(input.page, await request.get(url));
});

export default best;
