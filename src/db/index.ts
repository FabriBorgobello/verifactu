import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "@/config/server";
import {
  accounts,
  users,
  authenticators,
  sessions,
  verificationTokens,
} from "./schema/auth";

export const db = drizzle(env.DATABASE_URL, {
  casing: "snake_case", // https://orm.drizzle.team/docs/sql-schema-declaration#camel-and-snake-casing
  schema: {
    users,
    accounts,
    sessions,
    authenticators,
    verificationTokens,
  },
});
