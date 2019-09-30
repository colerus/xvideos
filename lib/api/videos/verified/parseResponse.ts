import { load } from 'cheerio';
import parseVideo from './parseVideo';
import createRefreshFunction from './createRefreshFunction';
import createHasNextFunction from './createHasNextFunction';
import createNextFunction from './createNextFunction';
import createHasPreviousFunction from './createHasPreviousFunction';
import createPreviousFunction from './createPreviousFunction';

const getVideos = ($: CheerioAPI | CheerioStatic) => {
  return $('#content > .mozaique > .thumb-block')
    .map((_i, video) => parseVideo($, video.nodeValue))
    .get();
};

const getPages = ($: CheerioStatic) => {
  return $('.pagination > ul > li > a')
    .map((_i, page) => $(page)
      .text())
    .filter((_i, page) => !isNaN(Number(page)))
    .map((_i, page) => Number(page) - 1)
    .get();
};

const parseResponse = (page: number, { data }: { data: string }) => {
  const $ = load(data);

  const videos = getVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };

  return {
    videos,
    pagination,
    refresh: createRefreshFunction(pagination),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunction(pagination),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunction(pagination),
  };
};

export default parseResponse;
