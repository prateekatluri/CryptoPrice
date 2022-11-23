import React, { useContext, useState } from "react";
import Search from "../components/Search";
import submitImage from "../assets/submit-icon.svg";
import ReloadImage from "../assets/reload.png";
import { CryptoContext, CurrencyContext } from "../context/CryptoContext";
function Filter() {
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { orderBy, setOrderBy } = useContext(CryptoContext);
  const { searchCoin, setSearchCoin } = useContext(CryptoContext);
  const [tempCurrency, setTempCurrency] = useState("usd");
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrency(tempCurrency);
  };
  const handleSelect = (e) => {
    setOrderBy(e.target.value);
  };
  return (
    <div className="w-[75%] border-gray-100 border m-auto mt-3 rounded flex">
      <div>
        <Search />
      </div>
      <div className="flex w-[20%] items-center">
        <label className="font-bold font-nunito">Currency:</label>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="usd"
            onChange={(e) => setTempCurrency(e.target.value)}
            className="border rounded w-[50px] ml-1 mb-1 bg-gray-100 placeholder:text-white"
          />
          <button type="submit" className="mb-1">
            <img src={submitImage} alt="submit_image" />
          </button>
        </form>
      </div>
      <div className="w-[20%] flex items-center">
        <form>
          <label className="font-bold font-nunito">Order By:</label>
          <select
            className="bg-gray-100 ml-1 border rounded"
            onChange={handleSelect}
          >
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="market_cap_desc"
            >
              market cap desc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="market_cap_asc"
            >
              market cap asc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value=" volume_desc"
            >
              volume desc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="volume_asc"
            >
              volume asc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="id_desc"
            >
              id desc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="id_ascc"
            >
              id asc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="gecko_desc"
            >
              gecko desc
            </option>
            <option
              className="bg-gray-200 text-white font-nunito font-bold"
              value="gecko_asc"
            >
              gecko asc{" "}
            </option>
          </select>
        </form>
      </div>
      <div className="flex">
        <img
          src={ReloadImage}
          alt="reset_image"
          className="h-[40%] m-auto flex cursor-pointer"
          onClick={() => {
            setSearchCoin("");
          }}
        />
      </div>
    </div>
  );
}

export default Filter;
