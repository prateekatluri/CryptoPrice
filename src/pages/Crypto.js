import CryptoTable from "../components/CryptoTable";
import Filter from "../components/Filter";
import { useState } from "react";
import { CryptoContext } from "../context/CryptoContext";
function Crypto() {
  const [searchCoin, setSearchCoin] = useState("");
  return (
    <CryptoContext.Provider value={{ searchCoin, setSearchCoin }}>
      <Filter />
      <CryptoTable />
    </CryptoContext.Provider>
  );
}

export default Crypto;
