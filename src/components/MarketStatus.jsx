import React, { useState, useEffect } from 'react';
import {determineMarketStatus} from '../utils/determineMarketStatus';

function MarketStatus() {
  const [status, setStatus] = useState('Closed');
  
  useEffect(() => {
    setStatus(determineMarketStatus(new Date()))
  }, [status]);

  return (
    <div className="market-status">
       <p>Market Status: {status}</p>
    </div>
  );
}

export default MarketStatus;
