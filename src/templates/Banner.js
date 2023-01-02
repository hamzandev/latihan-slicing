import React from "react";
import test from "../assets/img/test.png";
import { Link } from "react-router-dom";

function Wrapper() {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-gradient-to-br lg:px-20 from-yellow-100 to-sky-100 h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 pt-10">
          <div className="lg:w-1/2 pt-36 lg:px-0 px-5 lg:py-20">
            <img src={test} alt="testing" />
          </div>
          <div className="lg:w-1/3 w-[90%] flex flex-col selection:bg-orange-300">
            <h1 className="font-extrabold text-center lg:text-6xl text-4xl text-slate-800">
              Welcome to HamzanDev
            </h1>
            <span className="text-slate-600 lg:text-base text-sm text-center lg:text-end px-3 py-2">
              Pilihan terbaik untuk memulai pengalaman Belajar Kamu!!!
            </span>
            <Link to="/register" className="lg:text-end text-center">
              <button className="bg-gradient-to-br rounded-lg from-sky-500 to-pink-500 px-6 my-2 hover:from-pink-500 hover:to-sky-500 hover:shadow-lg transition-all duration-100 lg:mr-2 hover:scale-105 py-3 text-white/80">
                Gabung Sekarang
              </button>
            </Link>
          </div>
        </div>

        <a
          href="#courses"
          className="block lg:-mt-5 mt-5 underline underline-offset-4 decoration-dotted decoration-slate-700 text-center"
        >
          View Courses
        </a>
      </div>
    </div>
  );
}

export default Wrapper;
