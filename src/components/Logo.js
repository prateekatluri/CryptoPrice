import React from "react";
import { Link } from "react-router-dom";
import logoSVG from "../assets/logo.svg";
function Logo() {
  return (
    <div>
      <Link
        to="/"
        className="relative top-3 text-cyan text-lg flex items-center"
      >
        <img src={logoSVG} alt="logo" />
        <span className="font-semibold">CryptoPrice</span>
      </Link>
    </div>
  );
}

export default Logo;
