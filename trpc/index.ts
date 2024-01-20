import {publicProcedure, router } from './trpc';

export const appRouter = router({
   userList: publicProcedure
    .query(async () => {
      // Retrieve users from a data vs ource, this is an imaginary database
    //   const users = await db.user.findMany();
             

      return [10,20,30];
    }),
});

export type AppRouter = typeof appRouter;