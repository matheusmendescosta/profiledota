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
          <Feed titleDescription="Última Partida" textDescription="Desempenho nas últimas partidas">
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
              <div className=" ml-4 pl-4 pt-6">
                <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
                  <li className="mr-4">
                    {" "}
                    <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                    <p className=" text-center">V</p>
                  </li>
                  <li className="mr-4">
                    {" "}
                    <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                    <p className=" text-center">V</p>
                  </li>
                  <li className="mr-4">
                    {" "}
                    <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                    <p className=" text-center">V</p>
                  </li>
                </ul>
              </div>
            </div>
          </Feed>
          <Feed titleDescription="Feed do Úsuario" textDescription="">
            <div className="flex flex-row">
              <div>
                <Image src={"/dotaIcon.png"} width={75} height={75} alt="img" />
              </div>
              <div className="pl-2">
                <p className="text-slate-200">Risotto Grupon [RAPEI] alcançou level 6 com o Lion</p>
              </div>
            </div>
          </Feed>
          <Feed titleDescription="The International" textDescription="9 Troféus">
            <div className="ml-4 justify-end">
              <ul className="flex flex-wrap items-end justify-end text-gray-900 dark:text-white">
                <li className="mr-4">
                  {" "}
                  <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                </li>
                <li className="mr-4">
                  {" "}
                  <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                </li>
                <li className="mr-4">
                  {" "}
                  <Image src={"/dotaIcon.png"} width={75} height={75} alt="icone dota 2" />
                </li>
              </ul>
            </div>
          </Feed>
        </div>
      </main>

      <footer className="border flex flex-row mt-12">jogadores e botão lg jogar</footer>
    </div>
  );
}
