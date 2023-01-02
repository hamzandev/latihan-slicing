import React from "react";

function Register() {
  return (
    <div className="flex h-screen items-center  bg-gradient-to-tr from-pink-200 to-sky-200 justify-center">
      <form className="grid selection:bg-indigo-400 p-6 rounded-2xl bg-slate-100/50 backdrop-blur shadow gap-3">
        <h2 className="text-2xl font-semibold text-indigo-500 text-center">
          Register
        </h2>
        <input
          type="text"
          name="name"
          className="border-2 border-slate-300 rounded-lg px-4 py-2 focus:outline-indigo-500"
          placeholder="Fullname ..."
        />
        <input
          type="email"
          name="email"
          className="border-2 border-slate-300 rounded-lg px-4 py-2 focus:outline-indigo-500"
          placeholder="Email Address ..."
        />
        <input
          type="password"
          name="password"
          className="border-2 border-slate-300 rounded-lg px-4 py-2 focus:outline-indigo-500"
          placeholder="Password"
        />
        <input
          type="password"
          name="password"
          className="border-2 border-slate-300 rounded-lg px-4 py-2 focus:outline-indigo-500"
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          className="bg-gradient-to-br text-white/80 py-2 rounded-lg from-sky-500 to bg-indigo-500"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}

export default Register;
