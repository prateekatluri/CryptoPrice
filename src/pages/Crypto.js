import React, { createContext } from "react";
import CryptoTable from "../components/CryptoTable";
import Filter from "../components/Filter";
import { useState } from "react";

function Crypto() {
  return (
    <div>
      <Filter />
      <CryptoTable />
    </div>
  );
}

export default Crypto;
