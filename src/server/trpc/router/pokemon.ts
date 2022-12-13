import { publicProcedure, router } from "../trpc";
import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { TRPCError } from "@trpc/server";

export const pokemonRouter = router({
  getPokemonPairs: publicProcedure.query(async ({ ctx }) => {
    const [first, second] = getOptionsForVote();
    const pokemons = await ctx.prisma.pokemon.findMany({
      where: {
        id: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
      firstPokemon: pokemons[0],
      secondPokemon: pokemons[1],
    };
  }),
});
