import { type RouterOutputs } from "@/utils/trpc";
import Image from "next/image";
import { type FC } from "react";

type Tkey = keyof RouterOutputs["pokemon"]["getPokemonPairs"];
type Props = {
  pokemon: RouterOutputs["pokemon"]["getPokemonPairs"][Tkey];
  vote: () => void;
  disabled?: boolean;
};

const Pokemon: FC<Props> = ({ pokemon, vote, disabled = false }) => {
  return (
    <button
      className="vote-btn flex-1 disabled:cursor-not-allowed disabled:opacity-40"
      onClick={vote}
      disabled={disabled}
    >
      <div className="vote-img">
        <Image
          src={pokemon?.spriteUrl || ""}
          alt={pokemon?.name || ""}
          fill
          className="object-fit animate-fade-in"
        />
      </div>
      <p className="font-semibold capitalize italic">{pokemon?.name}</p>
    </button>
  );
};
export default Pokemon;
