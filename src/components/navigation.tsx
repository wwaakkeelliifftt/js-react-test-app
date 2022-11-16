import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
  return (
      <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500" >
        <span className="font-bold text-gray-300">React 2022</span>

        <span className="text-teal-100">
          <Link to="/" className="mr-10 hover:text-pink-400">Products</Link>
          <Link to="/wat" className="hover:text-pink-400">About WAT</Link>
        </span>
      </nav>
  )
}