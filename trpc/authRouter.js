import { AuthCredValidator } from "@/lib/validators/accCredValidators";
import { publicProcedure, router } from "./trpc";
import prisma from "../lib/prismaClient";

export const authRouter = router({
    getUser: publicProcedure
        .query(async () => {
            const data = await prisma.user.findUnique({ where: { email: 'gh@kl.com' } })
            if (data) {
                return { message: 'user exist' };
            }
            return { message: 'here user' }
        }),

    createUser: publicProcedure
        // .input(AuthCredValidator)
        .mutation(async ({ input }) => {
            // const { email, password } = input

            //check if user already exist
            // const data = await prisma.user.findUnique({ where: { email: 'elsa@prisma.io' } })
            //input user to database
            // if (!data) {
            //     return { message: 'User Exist' };
            // }
            const user = await prisma.user.create({
                data: {
                    email: 'elsa@prisma.io',
                    name: 'Elsa Prisma',
                },
            })
            return user


        }),


    // createUser: publicProcedure
    //     .input(AuthCredValidator)
    //     .mutation(async ({ input }) => {
    //         const { email, password } = input

    //         //check if user already exist
    //         const data=await prisma.user.find({email})
    //         if(!data){

    //         }

    //         //input user to database

    //         return { message: 'success' };
    //     }),
});