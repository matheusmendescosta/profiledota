"use client";
import React from "react";
import Image from "next/image";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: ["Lutador", "Acumulador", "Suporte", "Avanço em trilha", "Versátil"],
  datasets: [
    {
      label: "# Risotto Grupon",
      data: [4, 5, 3, 5, 4],
      hoverBackgroundColor: "rgba(232,105,90,0.8)",
      borderColor: "rgba(255, 165, 0)",
      borderWidth: 1,
    },
  ],
};

function MiniProfile() {
  return (
    <div className="flex flex-col ml-32 ">
      <div className="-mt-6  flex flex-row">
        <Image src={"/dotaIcon.png"} width={100} height={150} />
        <h3 className="font-mono text-lg font-bold text-white ml-2">Risotto Groupon</h3>
      </div>
      <div className="mt-8 p-6 flex flex-row justify-between bg-slate-500 bg-opacity-25">
        <Image src={"/dotaIcon.png"} width={75} height={75} />
        <Image src={"/dotaIcon.png"} width={75} height={75} />
        <Image src={"/dotaIcon.png"} width={75} height={75} />
      </div>
      <div className="mt-8 backdrop-blur-xl bg-slate-500 bg-opacity-25">
        <Radar data={data} />
      </div>
    </div>
  );
}

export default MiniProfile;
