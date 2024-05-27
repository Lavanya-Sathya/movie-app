import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full flex p-6 text-xl justify-between items-center border-b-4 border-[#3d405b] z-10">
      <p>MovieApp</p>
      <ul className="flex gap-4">
        <li className="hover: border-b-[#023047] hover:border-b-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover: border-b-[#023047] hover:border-b-2">
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
