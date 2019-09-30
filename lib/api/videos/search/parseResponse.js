const cheerio = require('cheerio');
const parseVideo = require('./parseVideo');
const createRefreshFunction = require('./createRefreshFunction');
const createHasNextFunction = require('./createHasNextFunction');
const createNextFunction = require('./createNextFunction');
const createHasPreviousFunction = require('./createHasPreviousFunction');
const createPreviousFunction = require('./createPreviousFunction');

const getVideos = ($) => {
  return $('#content > .mozaique > .thumb-block')
    .map((_i, video) => parseVideo($, video))
    .get();
};

const getPages = ($) => {
  return $('.pagination > ul > li > a')
    .map((_i, page) => $(page)
      .text())
    .filter((_i, page) => !isNaN(page))
    .map((_i, page) => Number(page) - 1)
    .get();
};

const parseResponse = (key, page, { data }) => {
  const $ = cheerio.load(data);

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

module.exports = parseResponse;
