import ResponseApi from '../videos/response/responseApi';
import { parseVideos, getPages } from './utils';
import createHasNextFunction from './createHasNextFunction';
import createHasPreviousFunction from './createHasPreviousFunction';
import createRefreshFunction from './createRefreshFunction';
import createNextFunction from './createNextFunction';
import createPreviousFunction from './createPreviousFunction';
import { load } from 'cheerio';

export function parseResponse(
  page: number,
  { data }: { data: string },
  callback: (args?: any) => Promise<ResponseApi>,
  key?: string,
): ResponseApi {
  const $ = load(data);

  const videos = parseVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };

  return {
    videos,
    pagination,
    refresh: createRefreshFunction(pagination, callback, key),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunction(pagination, callback, key),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunction(pagination, callback, key),
    key,
  } as ResponseApi;
}
