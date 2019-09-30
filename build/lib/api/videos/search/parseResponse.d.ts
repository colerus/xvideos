declare const parseResponse: (key: string, page: number, { data }: {
    data: string;
}) => {
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
};
export default parseResponse;
//# sourceMappingURL=parseResponse.d.ts.map