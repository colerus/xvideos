/// <reference types="cheerio" />
declare const parseVideo: ($: CheerioStatic, video: CheerioElement) => {
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