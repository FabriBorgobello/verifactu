import NextAuth from "next-auth";
import { authConfig } from "./auth/config";
import { NextRequest } from "next/server";

/** @see https://authjs.dev/getting-started/migrating-to-v5#edge-compatibility */
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(_req: NextRequest) {});
