"use client";
import React, { useState } from "react";

// import { Container } from './styles';

function Feed({ children: boxFeed, titleDescription = "Titulo do box feed", textDescription = "Texto do box feed" }) {
  return (
    <div className="w-auto bg-slate-500 bg-opacity-25 ml-4 p-2">
      <div className="flex flex-row justify-between -mt-2">
        <h1 className="w-36 text-slate-200">{titleDescription}</h1>
        <h1 className="ml-8 text-slate-200">{textDescription}</h1>
      </div>
      {boxFeed}
    </div>
  );
}

export default Feed;
