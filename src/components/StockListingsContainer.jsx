import React, {useState} from 'react';
import SearchInput from './SearchInput';
import StockListings from './StockListings';

const StockListingsContainer = () => {
	const [matches, setMatches] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	// fired when search is interacted with
	const handleChange = event => {
		const value = event.target.value;
		if(!value) {
			setMatches(false);
			setSearchTerm('');
		} else {
			setSearchTerm(value);
			fetchData(value);
		}
		
	};

	async function fetchData(searchTerm = '') {
		try {
			const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=BCXLKJHYY4E70I7F`;
			const res = await fetch(url);
			if (res.ok) {
				res.json().then(res => {
				 const {bestMatches} = res;
				 if(bestMatches && bestMatches.length) {
					 console.log(bestMatches)
					 setMatches(bestMatches)
				 } else {
					 setMatches([])
				 }
				});
			} else {
				throw Error('Non 200 response recieved from API');
			}
		} catch (err) {
			setMatches([]);
		}
	}

	return (
		<div className="stock-listings-container">
			<SearchInput searchTerm={searchTerm} handleChange={handleChange}/>
			<StockListings matches={matches}/>
		</div>
	);
};

export default StockListingsContainer;

