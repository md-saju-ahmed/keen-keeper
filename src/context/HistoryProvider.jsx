import { useState } from "react";
import { History } from "./History";

const HistoryProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const data = {
    interactions,
    setInteractions,
  };

  return (
    <History.Provider value={data}>
      {children}
    </History.Provider>
  );
};

export default HistoryProvider;