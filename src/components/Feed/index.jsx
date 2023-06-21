import React from "react";

// import { Container } from './styles';

function Feed({ children: boxFeed, titleDescription = "Titulo do box feed", textDescription = "Texto do box feed" }) {
  return (
    <div className="border w-auto bg-slate-500 bg-opacity-25 ml-4 p-2">
      <div className="flex flex-row justify-between">
        <h1 className="-mt-2 w-36 border">{titleDescription}</h1>
        <h1 className="border">{textDescription}</h1>
      </div>
      {boxFeed}
    </div>
  );
}

export default Feed;
