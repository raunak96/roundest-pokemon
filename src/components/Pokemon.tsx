import { type RouterOutputs } from "@/utils/trpc";
import Image from "next/image";
import { type FC } from "react";

type Props = {
  pokemon: RouterOutputs["pokemon"]["getPokemonById"];
};

const Pokemon: FC<Props> = ({ pokemon }) => {
  return (
    <button className="vote-btn flex-1">
      <div className="vote-img">
        <Image
          src={pokemon?.sprites?.front_default || ""}
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
