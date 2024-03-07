import prisma from "@/lib/prismaClient"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }