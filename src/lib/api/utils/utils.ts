import Video from "../videos/response/video";
import base from "../base";

const BASE_URL = base.BASE_URL;

export function parseVideo($: CheerioStatic, video: CheerioElement): Video {
  const $video = $(video);

  const title = $video.find('p:not(".metadata") a').attr('title');
  const path = $video.find('.thumb > a').attr('href');
  const url = `${BASE_URL}${path}`;
  const views = $video.find('p.metadata > span > span:not(.duration)').text();
  const duration = $video.find('p.metadata > span.bg > span.duration').text();
  const profileElement = $video.find('p.metadata > span > a');
  const profile = {
    name: profileElement.text(),
    url: `${BASE_URL}${profileElement.attr('href')}`,
  };

  return {
    url,
    path,
    title,
    duration,
    profile,
    views,
  };
};

export function parseVideos($: CheerioStatic): Video[] {
  return $('#content > .mozaique > .thumb-block')
    .map((_i, video) => parseVideo($, video))
    .get();
}

export function getPages($: CheerioStatic): number[] {
  return $('.pagination > ul > li > a')
    .map((_i, page) => $(page)
      .text())
    .filter((_i, page) => !isNaN(Number(page)))
    .map((_i, page) => Number(page))
    .get();
};

export function validatePage(page?: number): number {
  if (!page && page !== 0) return 1;
  
  if (!page || page < 1 || page > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Invalid page: ${page}`);
  }
  
  return page;
}
