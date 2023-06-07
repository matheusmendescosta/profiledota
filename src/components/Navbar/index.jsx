import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="flex flex-row justify-between w-auto h-16 p-4 pl-48 bg-gradient-to-r from-neutral-700 to-gray-800">
        <li>{/* <Image src={"/dotaIcon.png"} width={100} height={50} /> */}</li>
        <li>HÉRIO</li>
        <li>LOJA</li>
        <li>ASSISTIR</li>
        <li>APRENDER</li>
        <li>SALÃO DE JOGOS</li>
      </ul>
    </div>
  );
}

export default Navbar;
