import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const chatRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.chat.findMany({
        select: {
          name: true,
          message: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
  postMessage: protectedProcedure
    .input(z.object({ name: z.string(), message: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.chat.create({
          data: {
            name: input.name,
            message: input.message,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
