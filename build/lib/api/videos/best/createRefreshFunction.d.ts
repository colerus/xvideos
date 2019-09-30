declare const createRefreshFunction: (pagination: {
    page: number;
    pages: number[];
}) => () => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    refresh: any;
    hasNext: boolean;
    next: () => Promise<any>;
    hasPrevious: boolean;
    previous: () => any;
}>;
export default createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.d.ts.map