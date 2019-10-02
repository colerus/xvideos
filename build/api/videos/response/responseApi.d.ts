import Video from './video';
export default class ResponseApi {
    videos: Video[];
    pagination: {
        page: number;
        pages: number[];
    };
    refresh: () => Promise<ResponseApi>;
    hasNext: boolean;
    next?: () => Promise<ResponseApi>;
    hasPrevious: boolean;
    previous?: () => Promise<ResponseApi>;
    key?: string;
}
//# sourceMappingURL=responseApi.d.ts.map