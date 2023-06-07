import MiniProfile from "@/components/MiniProfile";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="h-full flex flex-row justify-between mt-28 backdrop-blur-sm border-t-2 border-orange-50 border-t-orange-400">
        <div>
          <MiniProfile />
        </div>
        <div>feed</div>
      </main>

      <footer className="border flex flex-row mt-12">jogadores e botão lg jogar</footer>
    </>
  );
}
