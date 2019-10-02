declare const createRefreshFunction: (keyword: string, pagination: {
    page: number;
    pages?: number[] | undefined;
}) => () => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    key: string;
    refresh: any;
    hasNext: () => boolean;
    next: () => Promise<any>;
    hasPrevious: () => boolean;
    previous: () => Promise<any>;
}>;
export default createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.d.ts.map