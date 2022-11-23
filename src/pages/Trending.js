import axios from "axios";
import React, { useEffect, useState } from "react";

function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setTrending(data.data.coins);
    }
    getData();
  }, []);
  return (
    <div className="w-[80%] border-gray-100 border mt-5 flex flex-wrap place-content-around p-5 ">
      {trending &&
        trending.slice(0, 6).map((coin) => {
          return (
            <div className="border border-gray-100 bg-gray-200 w-[40%] h-[115px] rounded-md m-2 p-4 ">
              <span className="text-gray-100">Name:</span>
              <span className="text-cyan ml-1">{coin.item.name}</span>
              <br></br>
              <span className="text-gray-100">Market Cap Rank:</span>
              <span className="text-cyan ml-1">
                {coin.item.market_cap_rank}
              </span>
              <br></br>
              <span className="text-gray-100">Price (In Btc):</span>
              <span className="text-cyan ml-1">{coin.item.price_btc}</span>
              <img
                src={coin.item.large}
                className="border rounded-full w-[25%] relative left-[90%] -top-[105%] "
              />
            </div>
          );
        })}
    </div>
  );
}

export default Trending;
