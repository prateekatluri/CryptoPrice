import axios from "axios";
import React, { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  async function handleFetch() {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    setSearchList(data.data.coins);
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleFetch();
  };
  return (
    <form className="flex ml-4 w-96 h-10 items-center">
      {searchValue.length > 0 && (
        <ul className="absolute top-40 backdrop-blur-3xl h-96 w-96 overflow-y-scroll ">
          {searchList.map((data) => (
            <li id={data.id} className="ml-1 mt-2 flex mb-2 cursor-pointer">
              <img src={data.thumb} alt="coin_image" className="pl-1 pr-1" />
              {data.name}
            </li>
          ))}
        </ul>
      )}
      <input
        type={"text"}
        onChange={handleChange}
        placeholder="Enter Value"
        value={searchValue}
        className=" placeholder:text-white placeholder:pl-1 bg-gray-100 rounded caret-cyan"
      />
      <button type="submit" className="relative right-7 ">
        <img src={searchIcon} alt="search_icon" />
      </button>
    </form>
  );
}

export default Search;
