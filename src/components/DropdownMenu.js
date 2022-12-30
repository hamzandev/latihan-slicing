import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ showCategory, isShowed }) {
  return (
    <li className="relative">
      <span
        onClick={showCategory}
        className="lg:py-1 cursor-pointer lg:px-4 hover:decoration-wavy hover:decoration-indigo-400 hover:underline hover:underline-offset-2"
        href="/service"
      >
        Category
      </span>
      <ul
        className={`absolute z-10 bg-gradient-to-br w-32 ${
          isShowed.category === true ? "flex" : "hidden"
        } flex-col transition-all duration-700 backdrop-blur bg-pink-200/30 shadow rounded text-slate-600 mx-3 my-2`}
      >
        <li className="hover:bg-black/10 transition-all duration-150 px-3 py-2">
          <Link href="/">Fullstack</Link>
        </li>
        <li className="hover:bg-black/10 transition-all duration-150 px-3 py-2">
          <Link href="/">Frontend</Link>
        </li>
        <li className="hover:bg-black/10 transition-all duration-150 px-3 py-2">
          <Link href="/">Backend</Link>
        </li>
        <li className="hover:bg-black/10 transition-all duration-150 px-3 py-2">
          <Link href="/">UI/UX Design</Link>
        </li>
      </ul>
    </li>
  );
}

export default DropdownMenu;
