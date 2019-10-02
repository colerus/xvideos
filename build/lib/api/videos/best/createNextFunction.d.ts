declare const createNextFunction: (pagination: {
    page: number;
}) => () => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    refresh: () => Promise<any>;
    hasNext: boolean;
    next: any;
    hasPrevious: boolean;
    previous: () => any;
}>;
export default createNextFunction;
//# sourceMappingURL=createNextFunction.d.ts.map