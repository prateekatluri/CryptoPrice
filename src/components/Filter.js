import React from "react";
import Search from "../components/Search";
function Filter() {
  return (
    <div className="w-[75%] border-gray-100 border m-auto mt-3 rounded flex">
      <div>
        <Search />
      </div>
      <div> Currency</div>
      <div>Sort</div>
      <div>Reset</div>
    </div>
  );
}

export default Filter;
