import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { trpc } from "@/utils/trpc";
import { type GetServerSideProps, type NextPage } from "next";
import Image from "next/image";
type Props = {
  first: number;
  second: number;
};
const Home: NextPage<Props> = ({ first, second }) => {
  const { data: firstPok, isLoading: isLoadingFirst } =
    trpc.pokemon.getPokemonById.useQuery(
      { id: first },
      {
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    );
  const { data: secondPok, isLoading: isLoadingSecond } =
    trpc.pokemon.getPokemonById.useQuery(
      { id: second },
      {
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    );
  if (isLoadingFirst || isLoadingSecond) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl sm:tracking-widest">
          Roundest <span className="text-[hsl(280,100%,70%)]">Poke</span>Mon
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-7 sm:items-center md:gap-8">
          <button className="vote-btn">
            <div className="vote-img">
              <Image
                src={firstPok?.sprites?.front_default || ""}
                alt={firstPok?.name || ""}
                fill
                className="object-fit"
              />
            </div>
            <p className="font-semibold capitalize italic">{firstPok?.name}</p>
          </button>
          <div className="text-center text-2xl">Vs</div>
          <button className="vote-btn">
            <div className="vote-img">
              <Image
                src={secondPok?.sprites?.front_default || ""}
                alt={secondPok?.name || ""}
                fill
                className="object-fit"
              />
            </div>
            <p className="font-semibold capitalize italic">{secondPok?.name}</p>
          </button>
        </div>
      </div>
    </main>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const [first, second] = getOptionsForVote();

  return {
    props: {
      first,
      second,
    },
  };
};
export default Home;
