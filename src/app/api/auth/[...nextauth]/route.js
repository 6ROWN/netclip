import NextAuth from "next-auth/next";
import { authOption } from "./authOption";

export const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
