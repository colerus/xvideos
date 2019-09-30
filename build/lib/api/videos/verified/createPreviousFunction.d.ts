declare const createPreviousFunction: (pagination: {
    page: number;
    pages?: number[] | undefined;
}) => () => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    refresh: () => Promise<any>;
    hasNext: () => boolean;
    next: () => Promise<any>;
    hasPrevious: () => boolean;
    previous: any;
}>;
export default createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.d.ts.map