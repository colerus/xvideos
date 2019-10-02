import ResponseApi from "../response/responseApi";
declare const createRefreshFunction: (pagination: {
    page: number;
    pages: number[];
}) => () => Promise<ResponseApi>;
export default createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.d.ts.map