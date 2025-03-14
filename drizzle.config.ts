import { defineConfig } from "drizzle-kit";

import { env } from "./src/config/server";
import { env as clientEnv } from "./src/config/client";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: { url: env.DATABASE_URL },
  tablesFilter: [
    clientEnv.NEXT_PUBLIC_ENVIRONMENT === "production"
      ? "verifactu_*"
      : "dev_verifactu_*",
  ],
  casing: "snake_case",
});
