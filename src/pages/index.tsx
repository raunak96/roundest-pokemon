import Footer from "@/components/Footer";
import Pokemon from "@/components/Pokemon";
import { trpc } from "@/utils/trpc";
import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  const { data: PokemonPair, isLoading } =
    trpc.pokemon.getPokemonPairs.useQuery(undefined, {
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-1 flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl sm:tracking-widest">
            Roundest <span className="text-[hsl(280,100%,70%)]">Poké</span>Mon
          </h1>
          {isLoading ? (
            <Image
              src="/rings.svg"
              width={200}
              height={200}
              alt="Loading..."
              className="flex-1"
            />
          ) : (
            <div className="flex flex-1 grid-cols-1 flex-col gap-4 sm:grid sm:grid-cols-7 sm:items-center md:gap-8">
              {PokemonPair?.firstPokemon && (
                <Pokemon pokemon={PokemonPair.firstPokemon} />
              )}
              <div className="text-center text-2xl">Vs</div>
              {PokemonPair?.secondPokemon && (
                <Pokemon pokemon={PokemonPair.secondPokemon} />
              )}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
