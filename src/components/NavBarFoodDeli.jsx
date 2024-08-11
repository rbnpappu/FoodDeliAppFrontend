import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full text-right">
      <ul className="inline-block">
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">Home</a></li>
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">Sign In</a></li>
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">Login</a></li>
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">Add Restaurant</a></li>
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">About</a></li>
        <li className="inline-block m-2 text-lg text-white font-sans"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

