import type { About, Career, Work } from "$lib/server/newt";
import { newtClient } from "$lib/server/newt";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const { items: about } = await newtClient.getContents<About>({
    appUid: "prof",
    modelUid: "about",
    query: {
      select: ["name", "image", "address", "birth", "hobby"],
    },
  });

  const { items: career } = await newtClient.getContents<Career>({
    appUid: "prof",
    modelUid: "career",
    query: {
      select: ["summary", "detail"],
    },
  });

  const { items: work } = await newtClient.getContents<Work>({
    appUid: "prof",
    modelUid: "work",
    query: {
      select: ["title", "pglang", "url"],
    },
  });

  return { about, career, work };
};
