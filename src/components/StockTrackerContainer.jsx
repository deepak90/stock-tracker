import React from 'react';
import MarketStatus from './MarketStatus';
import StockListingsContainer from './StockListingsContainer';

function App() {
  return (
    <div className="stock-tracker-container">
      <MarketStatus/>
      <StockListingsContainer/>
    </div>
  );
}

export default App;
