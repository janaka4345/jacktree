import { AuthCredValidator } from "@/lib/validators/accCredValidators";
import { publicProcedure, router } from "./trpc";
import prisma from "../lib/prismaClient";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    getUser: publicProcedure
        .query(async () => {
            const data = await prisma.user.findUnique({ where: { email: 'elsa@prisma.io' } })
            // const data = await prisma.user.findMany()
            if (!data) {
                return { message: 'no users exist' };
            }
            return data
        }),

    createUser: publicProcedure
        .input(AuthCredValidator)
        .mutation(async ({ input }) => {
            const { email, password } = input

            // check if user already exist
            const data = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            // input user to database
            if (data) {
                //TODO handle error
                // console.log('usrer exist');
                // throw new TRPCError({ code: 'CONFLICT', message: 'user exist' })
            }
            const user = await prisma.user.create({ data: { email, password } })
            return user


        }),

});