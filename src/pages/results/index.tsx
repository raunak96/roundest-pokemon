import { type GetStaticProps, type NextPage } from "next";
import {
  pokemonByVotes,
  type RoundestPokemonsType,
} from "@/utils/getPokemonByVotes";
import Head from "next/head";
import PokemonRow from "@/components/PokemonRow";
import Link from "next/link";

type Props = {
  pokemons: RoundestPokemonsType;
};
export const generateCountPercent = (pokemon: RoundestPokemonsType[number]) => {
  const { VoteFor, VoteAgainst } = pokemon._count;
  if (VoteFor + VoteAgainst === 0) {
    return 0;
  }
  return (VoteFor / (VoteFor + VoteAgainst)) * 100;
};

const ResultsPage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Head>
        <title>Roundest Pokemons - Results</title>
      </Head>
      <Link
        href="/"
        className="fixed top-4 left-6 text-2xl uppercase tracking-widest hover:text-[hsl(280,100%,70%)]"
      >
        Vote Now
      </Link>
      <div className="container flex flex-col space-y-3 px-4 py-16">
        <h1 className="text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl sm:tracking-widest">
          Res<span className="text-[hsl(280,100%,70%)]">ults</span>
        </h1>
        <table className="mx-auto w-full max-w-2xl flex-1 border">
          <tbody className="contents">
            {pokemons
              .sort((a, b) => generateCountPercent(b) - generateCountPercent(a))
              .map((pokemon, index) => (
                <PokemonRow
                  key={pokemon.dbId}
                  pokemon={pokemon}
                  rank={index + 1}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ResultsPage;

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await pokemonByVotes();
  return {
    props: { pokemons },
    revalidate: 60 * 60 * 5,
  };
};
