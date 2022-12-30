import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  const [isShowed, setIsShowed] = useState({
    category: false,
    forum: false,
  });

  const showCategory = () => {
    setIsShowed({
      category: !isShowed.category,
      forum: false,
    });
  };
  return (
    <nav className="flex flex-col lg:flex-row lg:gap-0 gap-3 items-center lg:justify-between justify-center shadow p-6 bg-gradient-to-tr from-blue-100/80 to-rose-100/80 fixed w-screen backdrop-blur-sm">
      <Link
        href="/"
        className="text-xl font-bold uppercase text-indigo-500 flex-2"
      >
        <h2>HamzanDev</h2>
      </Link>
      <ul className="flex items-center text-slate-600 lg:gap-3 gap-4 text-sm">
        <li>
          <Link
            className="lg:py-1 lg:px-4 hover:decoration-wavy hover:decoration-indigo-400 hover:underline hover:underline-offset-2"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="lg:py-1 lg:px-4 hover:decoration-wavy hover:decoration-indigo-400 hover:underline hover:underline-offset-2"
            to="/courses"
          >
            Kursus
          </Link>
        </li>
        <li>
          <Link
            className="lg:py-1 lg:px-4 hover:decoration-wavy hover:decoration-indigo-400 hover:underline hover:underline-offset-2"
            to="/classes"
          >
            Classes
          </Link>
        </li>
        <DropdownMenu showCategory={showCategory} isShowed={isShowed} />
        <li>
          <Link
            className="lg:py-1 lg:px-4 hover:decoration-wavy hover:decoration-indigo-400 hover:underline hover:underline-offset-2"
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>

      <ul className="text-sm flex lg:pt-0 pt-3 items-center font-semibold gap-2">
        <li>
          <Link
            to="/login"
            className="px-6 py-2 border-2 border-indigo-400 text-blue-500 hover:bg-gradient-to-tr rounded-lg hover:from-sky-500 hover:to-indigo-500 hover:text-white/80 transition-all duration-100"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-gradient-to-tr border-2 border-indigo-400 hover: transition-all animate-pulse rounded-lg duration-100 from-sky-500 to-indigo-500 text-white/80 px-4 py-2"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
