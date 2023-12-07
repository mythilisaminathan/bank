// Transaction.js
import React, { useState } from 'react';
import { useBalance } from './balancecontext';
import './transaction.css';

function Transaction() {
  const { balance, deposit, withdraw } = useBalance();
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  const handleDeposit = () => {
    if (parseInt(depositAmount) > 50000) {
      // Handle the limit case
      document.getElementById('demo1').innerHTML =
        'This is your limit "deposit next time"!';
    } else {
      deposit(parseInt(depositAmount));
      setDepositAmount('');
      alert(
        'Your deposit of ' +
          depositAmount +
          ' has been processed. Your new balance is: ' +
          (balance + parseInt(depositAmount))
      );
    }
  };

  const handleWithdrawal = () => {
    if (parseInt(withdrawalAmount) > balance) {
      // Handle insufficient balance case
      document.getElementById('demo').innerHTML = 'Insufficient balance!';
    } else {
      withdraw(parseInt(withdrawalAmount));
      setWithdrawalAmount('');
      alert(
        'Your withdrawal of ' +
          withdrawalAmount +
          ' has been processed. Your new balance is: ' +
          (balance - parseInt(withdrawalAmount))
      );
    }
  };

  return (
    <div className="App">
      <h2>{balance}</h2>
      <input
        type="text"
        value={withdrawalAmount}
        onChange={(e) => setWithdrawalAmount(e.target.value)}
        placeholder="Enter withdrawal amount"
      />
      <b id="demo"></b>
      <br />
      <button onClick={handleWithdrawal} className="btn5">
        Withdrawal
      </button>
      <br />
      <input
        type="text"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <b id="demo1"></b>
      <br />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Transaction;
