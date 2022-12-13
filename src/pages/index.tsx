import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl sm:tracking-widest">
            Roundest <span className="text-[hsl(280,100%,70%)]">Poke</span>Mon
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-7 sm:items-center md:gap-8">
            <div className="h-44 max-w-xs rounded-xl bg-white/10 p-4 hover:bg-white/20 sm:col-span-3">
              Pokemon 1
            </div>
            <div className="text-center text-2xl">Vs</div>
            <div className="h-44 max-w-xs rounded-xl bg-white/10 p-4 hover:bg-white/20 sm:col-span-3">
              Pokemon 2
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
