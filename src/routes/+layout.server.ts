import type { About, Career } from "$lib/server/newt";
import { newtClient } from "$lib/server/newt";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const { items: about } = await newtClient.getContents<About>({
    appUid: "prof",
    modelUid: "about",
    query: {
      select: ["image", "address", "birth", "hobby"],
    },
  });
  const { items: career } = await newtClient.getContents<Career>({
    appUid: "prof",
    modelUid: "career",
    query: {
      select: ["summary", "detail"],
    },
  });
  return { about, career };
};
