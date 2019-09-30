declare const best: (input: {
    year?: number | undefined;
    month?: number | undefined;
    page?: number | undefined;
}) => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    refresh: () => Promise<any>;
    hasNext: boolean;
    next: () => Promise<any>;
    hasPrevious: boolean;
    previous: () => any;
}>;
export default best;
//# sourceMappingURL=best.d.ts.map