import ResponseApi from "../videos/response/responseApi";
declare const createRefreshFunction: (pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function, keyword?: string | undefined) => () => Promise<ResponseApi>;
export default createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.d.ts.map