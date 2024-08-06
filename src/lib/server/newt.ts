import { NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from "$env/static/private";
import type { Image } from "newt-client-js";
import { createClient } from "newt-client-js";

export interface About {
  image: Image;
  address: string;
  birth: string;
  hobby: string;
}

export interface Career {
  summary: string;
  detail: string;
}

export interface Work {
  title: string;
  pglang: string;
}

export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
