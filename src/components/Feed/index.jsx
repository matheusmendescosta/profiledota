import React from "react";

// import { Container } from './styles';

function Feed({ children: boxFeed }) {
  return <div className="border w-auto bg-slate-500 bg-opacity-25 ml-4 p-2">{boxFeed}</div>;
}

export default Feed;
