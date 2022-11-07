import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
function Home() {
  return (
    <main className=" flex w-full h-full flex-col content-center items-center relative text-white font-nunito">
      <div className="w-screen h-screen fixed bg-gray-300 -z-10"></div>
      <Logo />
      <Navigation />
      <Outlet />
    </main>
  );
}

export default Home;
