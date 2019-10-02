import base from '../../base';
import parseResponse from './parseResponse';

const PATH = '/new';

const fresh = async ({ page = 1 } = {}) => {
  if (page < 1 || page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${page}`);
  }
  
  const url = `${PATH}/${page}`;
  const request = base.createRequest();

  return parseResponse(page, await request.get(url));
};

export default fresh;
