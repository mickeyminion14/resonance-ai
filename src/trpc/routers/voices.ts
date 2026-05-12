import { prisma } from "@/lib/db";
import { deleteAudio } from "@/lib/r2";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, orgProcedure } from "../init";
import { Prisma } from "@/generated/prisma/client";

export const voicesRouter = createTRPCRouter({
  getAll: orgProcedure
    .input(
      z
        .object({
          query: z.string().trim().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const searchFilter: Prisma.VoiceWhereInput = input?.query
        ? {
            OR: [
              { name: { contains: input.query, mode: "insensitive" } },
              { description: { contains: input.query, mode: "insensitive" } },
            ],
          }
        : {};

      const customVoicesPromise = prisma.voice.findMany({
        where: {
          variant: "CUSTOM",
          orgId: ctx.orgId,
          ...searchFilter,
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          description: true,
          category: true,
          language: true,
          variant: true,
        },
      });

      const systemVoicesPromise = prisma.voice.findMany({
        where: {
          variant: "SYSTEM",
          ...searchFilter,
        },
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          description: true,
          category: true,
          language: true,
          variant: true,
        },
      });

      const [custom, system] = await Promise.all([
        customVoicesPromise,
        systemVoicesPromise,
      ]);

      return { custom, system };
    }),

  delete: orgProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const voice = await prisma.voice.findUnique({
        where: { id: input.id, variant: "CUSTOM", orgId: ctx.orgId },
        select: { id: true, r2ObjectKey: true },
      });

      if (!voice) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Voice not found",
        });
      }
      await prisma.voice.delete({ where: { id: voice.id } });

      //for production, consider scanning orphan voices through cron jobs
      if (voice.r2ObjectKey) {
        await deleteAudio(voice.r2ObjectKey).catch(() => {});
      }

      return { success: true };
    }),
});
