declare const fresh: ({ page }?: {
    page?: number | undefined;
}) => Promise<{
    videos: any[];
    pagination: {
        page: number;
        pages: any[];
    };
    refresh: () => Promise<any>;
    hasNext: () => boolean;
    next: () => Promise<any>;
    hasPrevious: () => boolean;
    previous: () => Promise<any>;
}>;
export default fresh;
//# sourceMappingURL=fresh.d.ts.map