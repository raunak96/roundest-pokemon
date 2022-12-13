/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { publicProcedure, router } from "../trpc";
import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const pokemonRouter = router({
  getPokemonPairs: publicProcedure.query(async ({ ctx }) => {
    const [first, second] = getOptionsForVote();
    const pokemons = await ctx.prisma.pokemon.findMany({
      where: {
        id: {
          in: [first!, second!],
        },
      },
    });
    if (pokemons.length !== 2)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Could not fetch 2 pokemons.`,
      });

    return {
      firstPokemon: pokemons[0]!,
      secondPokemon: pokemons[1]!,
    };
  }),
  castVote: publicProcedure
    .input(
      z.object({
        votedFor: z.number(),
        votedAgainst: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const vote = await ctx.prisma.vote.create({
        data: {
          votedAgainstId: input.votedAgainst,
          votedForId: input.votedFor,
        },
      });
      return { success: true, vote };
    }),
});
