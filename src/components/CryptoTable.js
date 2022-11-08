import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
function CryptoTable(props) {
  const [coinDetails, setCoinDetails] = useState([]);
  const { searchCoin, setSearchCoin } = useContext(CryptoContext);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchCoin}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      );
      setCoinDetails(data.data);
    }
    fetchData();
  }, [searchCoin]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoinDetails(data.data);
    }
    fetchData();
  }, []);
  return (
    <div className="flex">
      <table className="mx-[10rem] mt-5 table-fixed w-full border-2 border-gray-100 ">
        <thead className="border-b-2 border-gray-100 ">
          <th className="p-3">Asset</th>
          <th className="p-3">Name</th>
          <th className="p-3">Price</th>
          <th className="p-3">Volume</th>
          <th className="p-3">Market Cap</th>
          <th className="p-3">24H high</th>
          <th className="p-3">24H low</th>
          <th className="p-3">Price Change</th>
        </thead>
        <tbody>
          {coinDetails &&
            coinDetails.map((coin) => (
              <tr className="hover:bg-gray-100 border-b-4 border-gray-100">
                <td className="p-3 text-center flex items-center justify-center cursor-pointer">
                  <img
                    src={coin.image}
                    alt="coin_image"
                    className="w-[2rem] mr-2"
                  />
                  {coin.symbol}
                </td>
                <td className="p-3 text-center cursor-pointer">{coin.name}</td>
                <td className="p-3 text-center">${coin.current_price}</td>
                <td className="p-3 text-center">${coin.total_volume}</td>
                <td className="p-3 text-center">${coin.market_cap}</td>
                <td className="p-3 text-center">${coin.high_24h}</td>
                <td className="p-3 text-center">${coin.low_24h}</td>
                <td
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "p-3 text-center text-green"
                      : "p-3 text-center text-red"
                  }
                >
                  {coin.price_change_percentage_24h}%
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
