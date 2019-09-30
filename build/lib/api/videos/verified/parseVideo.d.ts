/// <reference types="cheerio" />
declare const parseVideo: ($: CheerioStatic | CheerioAPI, video: string) => {
    url: string;
    path: string;
    title: string;
    duration: string;
    profile: {
        name: string;
        url: string;
    };
    views: string;
};
export default parseVideo;
//# sourceMappingURL=parseVideo.d.ts.map