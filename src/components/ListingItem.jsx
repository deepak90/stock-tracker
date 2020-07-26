import React from 'react';

function ListingItem({stockSymbol, stockName}) {
  return (
  <li><span>{stockSymbol}</span><span>{stockName}</span></li>
  );
}

export default ListingItem;
