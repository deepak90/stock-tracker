import React from 'react';
import ListingItem from './ListingItem';

function StockListings({matches}) {
  if(!matches) {
	  return null
  } else if(Array.isArray(matches) && !matches.length) {
	  return 'Sorry! No matches found for your query'
  } else {
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
}

export default StockListings;
