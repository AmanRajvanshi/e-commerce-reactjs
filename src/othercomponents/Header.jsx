import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="bg-zinc-200 h-auto flex items-center justify-between shadow-xl sticky top-0">
      <div className="flex items-center">
        <img
          src={logo}
          className="h-20 w-20 py-2 animate-spin duration-1000"
          alt="logo"
        />
        <span className="ml-2 font-extralight text-2xl cursor-pointer font-raleway">
          React
        </span>
      </div>
      <ul className="flex m-3 text-ellipsis">
        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">Home</a>
        </li>
        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">About</a>
        </li>

        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">Contact</a>
        </li>

        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">Login</a>
        </li>

        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">Signup</a>
        </li>

        <li className="mx-2 hover:underline active:underline text-lg font-roboto">
          <a href="#">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
