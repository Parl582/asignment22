"use client";
import React from "react";
import { useWindowWidth } from "./hooks/ResizeHooks";

const Problem3 = () => {
  const [width] = useWindowWidth();
  return (
    <div>
      <h2 className=" my-5 py-2 font-bold ring-1 px-2 w-max">
        current window width : {width}
      </h2>
    </div>
  );
};

export default Problem3;
