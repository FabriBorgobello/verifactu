/**
 * Server-side configuration.
 * NOTE: Do not include this variables in client-side code.
 */
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  // AUTH_SECRET: z.string(),
  // AUTH_GOOGLE_SECRET: z.string(),
  // AUTH_GOOGLE_ID: z.string(),
  // AUTH_DISCORD_ID: z.string(),
  // AUTH_DISCORD_SECRET: z.string(),
  // RESEND_API_KEY: z.string(),
  // OPEN_WEATHER_API_KEY: z.string(),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  //   AUTH_SECRET: process.env.AUTH_SECRET,
  //   AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  //   AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  //   AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
  //   AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
  //   RESEND_API_KEY: process.env.RESEND_API_KEY,
  //   OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
});
