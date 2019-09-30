declare const createPreviousFunction: (key: string, pagination: {
    page: number;
    pages?: number[] | undefined;
}) => () => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    key: string;
    refresh: () => Promise<any>;
    hasNext: () => boolean;
    next: () => Promise<any>;
    hasPrevious: () => boolean;
    previous: any;
}>;
export default createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.d.ts.map