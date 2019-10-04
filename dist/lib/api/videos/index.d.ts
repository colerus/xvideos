export declare const best: (input?: {
    year?: number | undefined;
    month?: number | undefined;
    page?: number | undefined;
} | undefined) => Promise<import("./response/responseApi").default>;
export declare const dashboard: ({ page }?: {
    page?: number | undefined;
}) => Promise<import("./response/responseApi").default>;
export declare const details: ({ url }: {
    url: string;
}) => Promise<import("./response/videoDetails").default>;
export declare const fresh: ({ page }?: {
    page?: number | undefined;
}) => Promise<import("./response/responseApi").default>;
export declare const search: (input: {
    key: string;
    page?: number | undefined;
}) => Promise<import("./response/responseApi").default>;
export declare const verified: ({ page }?: {
    page?: number | undefined;
}) => Promise<import("./response/responseApi").default>;
declare const videos: {
    best: (input?: {
        year?: number | undefined;
        month?: number | undefined;
        page?: number | undefined;
    } | undefined) => Promise<import("./response/responseApi").default>;
    dashboard: ({ page }?: {
        page?: number | undefined;
    }) => Promise<import("./response/responseApi").default>;
    details: ({ url }: {
        url: string;
    }) => Promise<import("./response/videoDetails").default>;
    fresh: ({ page }?: {
        page?: number | undefined;
    }) => Promise<import("./response/responseApi").default>;
    search: (input: {
        key: string;
        page?: number | undefined;
    }) => Promise<import("./response/responseApi").default>;
    verified: ({ page }?: {
        page?: number | undefined;
    }) => Promise<import("./response/responseApi").default>;
};
export default videos;
//# sourceMappingURL=index.d.ts.map