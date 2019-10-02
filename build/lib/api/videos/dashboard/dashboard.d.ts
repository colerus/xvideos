declare const dashboard: ({ page }?: {
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
export default dashboard;
//# sourceMappingURL=dashboard.d.ts.map