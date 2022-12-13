import { PokemonClient } from "pokenode-ts";
import { prisma } from "@/server/db/client";
const MAX_DEX_ID = 493;

const run = async () => {
  const pokeApi = new PokemonClient();
  const pokemons = await pokeApi.listPokemons(0, MAX_DEX_ID);
  const formattedPokemon = pokemons.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name as string,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
  const created = await prisma.pokemon.createMany({ data: formattedPokemon });
  console.log("Created", created);
  await prisma.$disconnect();
};

run();
