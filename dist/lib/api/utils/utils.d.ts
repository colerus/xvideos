/// <reference types="cheerio" />
import Video from '../videos/response/video';
export declare function parseVideo($: cheerio.Root, video: cheerio.Element): Video;
export declare function parseVideos($: cheerio.Root): Video[];
export declare function getPages($: cheerio.Root): number[];
export declare function validatePage(page?: number): number;
//# sourceMappingURL=utils.d.ts.map