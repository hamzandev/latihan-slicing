import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center flex-col text-slate-800">
      <h2 className="lg:text-8xl text-4xl text-slate-700 font-bold">404</h2>
      <span className="my-3 text-2xl">Page not found!</span>
      <Link to="/">
        <span className="decoration-dotted text-sm text-blue-500 underline-offset-4 underline">
          Kembali ke Halaman Beranda
        </span>
      </Link>
    </div>
  );
}

export default NotFound;
