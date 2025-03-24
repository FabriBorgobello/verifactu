import { env } from "@/config/server";
import { tool } from "ai";
import { GroundXClient } from "groundx";
import { z } from "zod";

export const groundX = new GroundXClient({ apiKey: env.GROUNDX_API_KEY });

export const getRAGData = tool({
  description: "Get RAG data from GroundX",
  parameters: z.object({ query: z.string() }),
  execute: async ({ query }) => {
    const VERIFACTU_BUCKET = 16864;
    const response = await groundX.search.content(VERIFACTU_BUCKET, { query });
    return response;
  },
});
