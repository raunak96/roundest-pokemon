import { prisma } from "@/server/db/client";

export const pokemonByVotes = async () =>
  await prisma.pokemon.findMany({
    orderBy: [
      { VoteFor: { _count: "desc" } },
      { VoteAgainst: { _count: "asc" } },
    ],
    include: {
      _count: {
        select: {
          VoteAgainst: true,
          VoteFor: true,
        },
      },
    },
  });

export type RoundestPokemonsType = Awaited<ReturnType<typeof pokemonByVotes>>;
