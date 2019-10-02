import ResponseApi from "../videos/response/responseApi";
export declare const createPreviousFunction: (pagination: {
    page: number;
    pages: number[];
}, callback: Function) => () => Promise<ResponseApi>;
export declare const createPreviousFunctionWithKeyword: (key: string, pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function) => () => Promise<ResponseApi>;
//# sourceMappingURL=createPreviousFunction.d.ts.map