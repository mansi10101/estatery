import React from 'react';
import TitleBar from './TitleBar';
import styles from '../../stylesheets/Header.module.css';
import Filters from './Filters';

const Header = () => {
	const [keyword, setKeyword] = React.useState('');
	const [country, setCountry] = React.useState('');
	const [date, setDate] = React.useState(null);
	const [price, setPrice] = React.useState([0, 100]);

	console.log(date);

	return (
		<>
			<TitleBar styles={styles} keyword={keyword} setKeyword={setKeyword} />

			<Filters
				styles={styles}
				country={country}
				setCountry={setCountry}
				date={date}
				setDate={setDate}
				price={price}
				setPrice={setPrice}
			/>
		</>
	);
};

export default Header;
