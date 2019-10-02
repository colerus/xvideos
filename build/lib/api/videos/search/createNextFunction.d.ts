declare const createNextFunction: (keyword: string, pagination: {
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
    next: any;
    hasPrevious: () => boolean;
    previous: () => Promise<any>;
}>;
export default createNextFunction;
//# sourceMappingURL=createNextFunction.d.ts.map