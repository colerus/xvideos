import ResponseApi from "../videos/response/responseApi";
import { load } from "cheerio";
import { parseVideos, getPages } from "./utils";
import { createRefreshFunctionWithKeyword, createRefreshFunction } from "./createRefreshFunction";
import createHasNextFunction from "./createHasNextFunction";
import { createNextFunction, createNextFunctionWithKeyword } from "./createNextFunction";
import createHasPreviousFunction from "./createHasPreviousFunction";
import { createPreviousFunctionWithKeyword, createPreviousFunction } from "./createPreviousFunction";

export function parseResponse(page: number, { data }: { data: string }, callback: Function): ResponseApi {
  const $ = load(data);

  const videos = parseVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };

  return {
    videos,
    pagination,
    refresh: createRefreshFunction(pagination, callback),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunction(pagination, callback),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunction(pagination, callback) ,
  } as ResponseApi;
}

export function parseResponseWithKeyword(key: string, page: number, { data }: { data: string }, callback: Function): ResponseApi {
  const $ = load(data);

  const videos = parseVideos($);

  const pagination = {
    page,
    pages: getPages($),
  };
  return {
    videos,
    pagination,
    key,
    refresh: createRefreshFunctionWithKeyword(key, pagination, callback),
    hasNext: createHasNextFunction(pagination),
    next: createNextFunctionWithKeyword(key, pagination, callback),
    hasPrevious: createHasPreviousFunction(pagination),
    previous: createPreviousFunctionWithKeyword(key, pagination, callback),
  };
}
