import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNav, setIsNav] = useState(false);
  const handleClick = () => setIsNav(!isNav);
  return (
    <div className="fixed top-0 left-0 bg-white w-full flex p-6 text-xl justify-between items-center border-b-4 border-[#3d405b] z-10">
      <p>MovieApp</p>
      {/* Menu */}
      <ul className="hidden sm:flex gap-4">
        <li className="hover: border-b-[#023047] hover:border-b-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover: border-b-[#023047] hover:border-b-2">
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
      {/* hamburger */}
      <div
        className="visible sm:hidden cursor-pointer z-20 "
        onClick={handleClick}
      >
        {!isNav ? (
          <FaBars size={20} className="text-[#0a192f]" />
        ) : (
          <FaTimes size={20} className="text-white" />
        )}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !isNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center"
        }
      >
        <li
          className="hover: border-b-[#023047] hover:border-b-2 py-2 text-2xl"
          onClick={handleClick}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="hover: border-b-[#023047] hover:border-b-2 py-2 text-2xl"
          onClick={handleClick}
        >
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
