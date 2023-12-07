

import React from 'react';
import Transaction from './sample';
import BalanceProvider from './balancecontext';

function App() {
  return (
    <BalanceProvider>
      <div className="App">
        <Transaction />
      </div>
    </BalanceProvider>
  );
}

export default App;
