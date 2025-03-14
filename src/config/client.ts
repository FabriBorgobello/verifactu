/**
 * Client-side configuration
 * NOTE: Variables are prefixed with NEXT_PUBLIC_ to make them available to the client
 * @see https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
 */
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "staging", "production"]),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
});
