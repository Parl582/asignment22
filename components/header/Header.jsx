import Link from "next/link";
import React from "react";

const Header = () => {
  const links = ["problem-2", "problem-3"];
  return (
    <div className="w-full py-3 flex px-3 items-center justify-between top-0 sticky bg-white text-black">
      <Link href={"/"}> Assignment </Link>
      <div className="flex gap-3">
        <Link href={`/`} className="ring-2 px-2">
          problem-1
        </Link>
        {links.map((elm) => (
          <Link href={`/${elm}`} key={elm} className="ring-2 px-2">
            {elm}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
