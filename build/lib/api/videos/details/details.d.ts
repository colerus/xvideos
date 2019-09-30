declare const details: ({ url }: {
    url: string;
}) => Promise<{
    title: string;
    url: string;
    duration: string;
    image: string;
    views: string;
    videoType: string;
    videoWidth: string;
    videoHeight: string;
    files: {
        low: string;
        high: string;
        HLS: string;
        thumb: string;
        thumb69: string;
        thumbSlide: string;
        thumbSlideBig: string;
    };
}>;
export default details;
//# sourceMappingURL=details.d.ts.map