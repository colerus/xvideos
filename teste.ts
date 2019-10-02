import * as api from "./lib/api";

const xv = api.default.videos;

xv.verified().then((_data) => {
  console.log("rodou");
});
