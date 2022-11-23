import CryptoTable from "../components/CryptoTable";
import Filter from "../components/Filter";
import { useState } from "react";
import { CryptoContext, CurrencyContext } from "../context/CryptoContext";
function Crypto() {
  const [searchCoin, setSearchCoin] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [orderBy, setOrderBy] = useState("market_cap_desc");

  return (
    <CryptoContext.Provider
      value={{ searchCoin, setSearchCoin, orderBy, setOrderBy }}
    >
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Filter />
        <CryptoTable />
      </CurrencyContext.Provider>
    </CryptoContext.Provider>
  );
}

export default Crypto;
