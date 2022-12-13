import { z } from "zod";
import { publicProcedure, router } from "../trpc";

import { PokemonClient } from "pokenode-ts";

export const pokemonRouter = router({
  getPokemonById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const api = new PokemonClient();
      const pokemon = await api.getPokemonById(input.id);
      return pokemon;
    }),
});
