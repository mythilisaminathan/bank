import logo from './logo.svg';
import { useState, useEffect,useReducer} from 'react';
import './App.css';


   
const reducer = (balance, action) => {
  switch (action.type) {
    case "WITHDRAW":
          return balance = balance - action.value;
    case "DEPOSIT": 
        return balance = balance + action.value;
    default:
      return balance;
  }
};


function App() {

  const withdraw = (amount) => {
    dispatch({type:"WITHDRAW",value:amount})
  }

  const deposit = (amount) => {
    dispatch({type:"DEPOSIT",value:amount})
  }
 
  const [balance, dispatch] = useReducer(reducer, 10000);

  return (
    <>
    <h1>{balance}</h1>
     <button onClick={() => withdraw(5500)}>Withdraw</button>
     <button onClick={() => deposit(5500)}>Deposit</button>
    </>
  );

}

export default App;