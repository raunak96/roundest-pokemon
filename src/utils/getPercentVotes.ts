import { type RoundestPokemonsType } from "./getPokemonByVotes";

export const generateCountPercent = (pokemon: RoundestPokemonsType[number]) => {
  const { VoteFor, VoteAgainst } = pokemon._count;
  if (VoteFor + VoteAgainst === 0) {
    return 0;
  }
  return (VoteFor / (VoteFor + VoteAgainst)) * 100;
};
