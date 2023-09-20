"use client";
import React from "react";
import Problem3 from "@/components/problem-3/Problem3";

const page = () => {
  return (
    <div className="p-3">
      <h1 className="py-3 font-bold">Problem 3: Advanced Hooks and Custom Hook Creation (20 minutes)</h1>
      <p>
        You have been tasked with creating a custom hook useWindowWidth that
        tracks the width of the browser window. The hook should return the
        current window width. It should re-calculate this width whenever the
        window is resized. Create a component that uses this hook to display the
        current window width.
      </p>
      <Problem3 />
    </div>
  );
};

export default page;
