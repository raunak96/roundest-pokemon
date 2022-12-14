import { generateCountPercent } from "@/pages/results";
import { type RoundestPokemonsType } from "@/utils/getPokemonByVotes";
import Image from "next/image";
import { type FC } from "react";

type Props = {
  pokemon: RoundestPokemonsType[number];
  rank: number;
};

const PokemonRow: FC<Props> = ({ pokemon, rank }) => {
  return (
    <tr className="relative flex items-center justify-between border-b px-2 py-4 sm:text-xl">
      <td className="flex flex-1 items-center space-x-2 pl-5">
        <Image
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          height={64}
          width={64}
        />
        <h3 className="font-semibold  capitalize">{pokemon.name}</h3>
      </td>
      <td className="pr-2">
        {generateCountPercent(pokemon).toFixed(2).replace(/\.0+$/, "") + "%"}
      </td>
      <td className="absolute top-0 left-0 z-20 rounded-br-md border border-gray-100 bg-[hsl(280,100%,70%)] px-2 font-semibold">
        {rank}
      </td>
    </tr>
  );
};
export default PokemonRow;
