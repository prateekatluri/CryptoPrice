import axios from "axios";
import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import { debounce } from "lodash";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  //to display only the coin which is clicked
  const { searchCoin, setSearchCoin } = useContext(CryptoContext);

  async function handleFetch() {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    setSearchList(data.data.coins);
  }
  var debouncehandleFetch = debounce(function () {
    handleFetch();
  }, 3000);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncehandleFetch();
  };

  // const handleChangeDebounce = debounce();
  const handleSearchClick = (id) => {
    setSearchCoin(id);
    setSearchValue("");
  };

  return (
    <form className="flex ml-4 w-96 h-10 items-center">
      {searchValue.length > 0 && (
        <ul className="absolute top-40 backdrop-blur-3xl h-96 w-96 overflow-y-scroll ">
          {searchList.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                handleSearchClick(data.id);
              }}
              className="ml-1 mt-2 flex mb-2 cursor-pointer"
            >
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
