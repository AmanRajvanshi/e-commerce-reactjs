import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "black",
  };
  return (
    <nav className="bg-zinc-200 h-auto flex items-center justify-between shadow-xl sticky top-0">
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-20 w-20 py-2" alt="logo" />
        <span className="ml-2 font-extralight text-2xl cursor-pointer font-raleway">
          React
        </span>
      </Link>

      <ul className="flex m-3 text-ellipsis">
        <li className="mx-3 flex text-gray-700 items-center hover:underline text-md font-roboto font-light">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="mx-3 flex text-gray-700 items-center hover:underline text-md font-roboto font-light">
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>

        <li className="mx-3 flex text-gray-700 items-center hover:underline text-md font-roboto font-light">
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>

        <li className="mx-3 flex text-gray-700 items-center hover:underline text-xl font-roboto font-light">
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="absolute right-4 top-5 rounded-full bg-red-500 w-4 h-4 p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              5
            </span>
          </NavLink>
        </li>
        <li className="mx-3 flex text-gray-700 items-center hover:underline text-xl font-roboto font-light">
          <NavLink
            to="/wishlist"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <i className="fa-solid fa-heart"></i>
            <span class="absolute right-14 top-5 rounded-full bg-red-500 w-4 h-4 p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              5
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
