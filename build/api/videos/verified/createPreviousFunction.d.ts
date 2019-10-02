import ResponseApi from "../response/responseApi";
declare const createPreviousFunction: (pagination: {
    page: number;
    pages?: number[] | undefined;
}) => () => Promise<ResponseApi>;
export default createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.d.ts.map