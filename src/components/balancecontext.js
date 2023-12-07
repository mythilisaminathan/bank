// BalanceContext.js
import React, { createContext, useState, useContext } from 'react';

const BalanceContext = createContext();

 export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(10000);

  const deposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const withdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <BalanceContext.Provider value={{ balance, deposit, withdraw }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  return useContext(BalanceContext);
};

export default BalanceProvider;
