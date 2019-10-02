import ResponseApi from "../videos/response/responseApi";
declare const createPreviousFunction: (pagination: {
    page: number;
    pages?: number[] | undefined;
}, callback: Function, key?: string | undefined) => () => Promise<ResponseApi>;
export default createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.d.ts.map