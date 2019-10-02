import ResponseApi from "../videos/response/responseApi";
export declare const createRefreshFunction: (pagination: {
    page: number;
    pages: number[];
}, callback: Function) => () => Promise<ResponseApi>;
export declare const createRefreshFunctionWithKeyword: (keyword: string, pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function) => () => Promise<ResponseApi>;
//# sourceMappingURL=createRefreshFunction.d.ts.map