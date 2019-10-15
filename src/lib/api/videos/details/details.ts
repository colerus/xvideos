/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { load } from 'cheerio';
import { launch, Browser, connect } from 'puppeteer';
import VideoDetails from '../response/videoDetails';

const details = async ({ url }: { url: string }): Promise<VideoDetails> => {
  let browser: Browser;
  try {
    if (process.env.PUPPETEER_WS_BROWSER) {
      browser = await connect({ browserWSEndpoint: process.env.PUPPETEER_WS_BROWSER });
    } else {
      browser = await launch({ headless: true, ignoreHTTPSErrors: true, handleSIGHUP: true });
    }
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const html = await page.content();

    const $ = load(html);

    const title = $('meta[property="og:title"]').attr('content');
    const duration = $('meta[property="og:duration"]').attr('content');
    const image = $('meta[property="og:image"]').attr('content');
    const videoType = $('meta[property="og:video:type"]').attr('content');
    const videoWidth = $('meta[property="og:video:width"]').attr('content');
    const videoHeight = $('meta[property="og:video:height"]').attr('content');
    const views = $('#nb-views-number').text();
    const videoScript = $('#video-player-bg > script:nth-child(6)').html();
    const tags = $('.video-tags-list > ul > li')
      .toArray()
      .map(elm => {
        return $(elm).text();
      });
    const files = {
      low: (videoScript!.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
      high: (videoScript!.match("html5player.setVideoUrlHigh\\('(.*?)'\\);") || [])[1],
      HLS: (videoScript!.match("html5player.setVideoHLS\\('(.*?)'\\);") || [])[1],
      thumb: (videoScript!.match("html5player.setThumbUrl\\('(.*?)'\\);") || [])[1],
      thumb69: (videoScript!.match("html5player.setThumbUrl169\\('(.*?)'\\);") || [])[1],
      thumbSlide: (videoScript!.match("html5player.setThumbSlide\\('(.*?)'\\);") || [])[1],
      thumbSlideBig: (videoScript!.match("html5player.setThumbSlideBig\\('(.*?)'\\);") || [])[1],
    };

    return {
      title,
      url,
      duration,
      image,
      views,
      videoType,
      videoWidth,
      videoHeight,
      files,
      tags,
    } as VideoDetails;
  } catch (err) {
    throw err;
  } finally {
    if (browser!) await browser!.close();
  }
};

export default details;
