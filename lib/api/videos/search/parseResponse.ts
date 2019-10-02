import { load } from 'cheerio';
import parseVideo from './parseVideo';
import createRefreshFunction from './createRefreshFunction';
import createHasNextFunction from './createHasNextFunction';
import createNextFunction from './createNextFunction';
import createHasPreviousFunction from './createHasPreviousFunction';
import createPreviousFunction from './createPreviousFunction';

const getVideos = ($: CheerioStatic) => {
  return $('#content > .mozaique > .thumb-block')
    .map((_i, video) => parseVideo($, video))
    .get();
};

const getPages = ($: CheerioStatic) => {
  return $('.pagination > ul > li > a')
    .map((_i, page) => $(page)
      .text())
    .filter((_i, page) => !isNaN(Number(page)))
    .map((_i, page) => Number(page))
    .get();
};

const parseResponse = (key: string, page: number, { data }: { data: string }) => {
  const $ = load(data);

  const videos = getVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };
  return {
    videos,
    pagination,
    key,
    refresh: createRefreshFunction(key, pagination),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunction(key, pagination),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunction(key, pagination),
  };
};

export default parseResponse;
