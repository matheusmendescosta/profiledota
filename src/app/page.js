import Feed from "@/components/Feed";
import MiniProfile from "@/components/MiniProfile";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="h-full flex flex-row justify-start mt-28 backdrop-blur-sm border-t-2 border-orange-50 border-t-orange-400">
        <div>
          <MiniProfile />
        </div>
        <div className="flex flex-col">
          <Feed titleDescription="Ultima partida">
            <div className="flex flex-row mt-4">
              <div>
                <Image src={"/dotaIcon.png"} width={150} height={150} alt="icone dota 2" />
              </div>
              <div className="pl-2">
                <h2 className=" text-cyan-50 text-sm font-mono font-semibold">BRISTLEBACK</h2>
                <table className="border-spacing-px text-slate-300">
                  <tbody>
                    <tr>
                      <td>Modo</td>
                      <td>Turbo</td>
                    </tr>
                    <tr>
                      <td>V / M / A</td>
                      <td>22 / 0 / 34</td>
                    </tr>
                    <tr>
                      <td>Duração</td>
                      <td>22:34</td>
                    </tr>
                    <tr>
                      <td>Resultado</td>
                      <td>Derrota</td>
                    </tr>
                    <tr>
                      <td>04/06/2023</td>
                      <td>19:34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Feed>
        </div>
      </main>

      <footer className="border flex flex-row mt-12">jogadores e botão lg jogar</footer>
    </div>
  );
}
