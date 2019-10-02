import ResponseApi from "../videos/response/responseApi";
export declare const createNextFunction: (pagination: {
    page: number;
}, callback: Function) => () => Promise<ResponseApi>;
export declare const createNextFunctionWithKeyword: (keyword: string, pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function) => () => Promise<ResponseApi>;
//# sourceMappingURL=createNextFunction.d.ts.map