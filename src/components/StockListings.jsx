import React from 'react';
import ListingItem from './ListingItem';

function StockListings({matches}) {
  return (
	<ul className="card-list">
		{matches &&
			matches.map(item => {
				const { '1. symbol': stockSymbol } = item;
				return <ListingItem key={stockSymbol} stockSymbol={stockSymbol} />;
			})}
	</ul>
  );
}

export default StockListings;
