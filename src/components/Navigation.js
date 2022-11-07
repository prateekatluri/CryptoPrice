import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className=" w-[40%] border-2 border-cyan  rounded-xl  mt-5 flex justify-around font-nunito ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive && `bg-[cyan] text-gray-300 `
          }cursor-pointer w-full border text-center bg-gray-100 m-1 rounded-lg font-bold font-nunito`
        }
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `${
            isActive && `bg-[cyan] text-gray-300 `
          }cursor-pointer w-full border text-center bg-gray-100 m-1 rounded-lg font-bold font-nunito`
        }
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) =>
          `${
            isActive && `bg-[cyan] text-gray-300 `
          }cursor-pointer w-full border text-center bg-gray-100 m-1 rounded-lg font-bold font-nunito`
        }
      >
        Saved
      </NavLink>
    </nav>
  );
}

export default Navigation;
