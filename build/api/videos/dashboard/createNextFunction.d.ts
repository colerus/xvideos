import ResponseApi from "../response/responseApi";
declare const createNextFunction: (pagination: {
    page: number;
    pages: number[];
}) => () => Promise<ResponseApi>;
export default createNextFunction;
//# sourceMappingURL=createNextFunction.d.ts.map