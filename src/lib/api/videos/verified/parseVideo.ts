import base from '../../base';
import Video from '../response/video';

const BASE_URL = base.BASE_URL;
const parseVideo = ($: CheerioStatic, video: CheerioElement): Video => {
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

export default parseVideo;
