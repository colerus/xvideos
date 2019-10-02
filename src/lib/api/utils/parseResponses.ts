import ResponseApi from "../videos/response/responseApi";
import { load } from "cheerio";
import { parseVideos, getPages } from "./utils";
import createHasNextFunction from "./createHasNextFunction";
import createHasPreviousFunction from "./createHasPreviousFunction";
import createRefreshFunction from "./createRefreshFunction";
import createNextFunction from "./createNextFunction";
import createPreviousFunction from "./createPreviousFunction";

export function parseResponse(page: number, { data }: { data: string }, callback: Function, key?: string): ResponseApi {
  const $ = load(data);

  const videos = parseVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };

  return {
    videos,
    pagination,
    refresh: createRefreshFunction(pagination, callback, key),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunction(pagination, callback, key),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunction(pagination, callback, key) ,
  } as ResponseApi;

}
