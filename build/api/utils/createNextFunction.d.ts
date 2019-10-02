import ResponseApi from "../videos/response/responseApi";
declare const createNextFunction: (pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function, keyword?: string | undefined) => () => Promise<ResponseApi>;
export default createNextFunction;
//# sourceMappingURL=createNextFunction.d.ts.map