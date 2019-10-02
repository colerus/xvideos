declare const search: (input: {
    key: string;
    page?: number | undefined;
}) => Promise<{
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
    previous: () => Promise<any>;
}>;
export default search;
//# sourceMappingURL=search.d.ts.map