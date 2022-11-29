import React from 'react';
import TitleBar from './TitleBar';
import styles from '../../stylesheets/Header.module.css';
import Filters from './Filters';
import dayjs from 'dayjs';
import { Countries, PropertyTypes } from '../../utils/constants';

const Header = () => {
	const [keyword, setKeyword] = React.useState('');
	const [country, setCountry] = React.useState(Countries[0]);
	const [date, setDate] = React.useState(new Date());
	const [price, setPrice] = React.useState([0, 100]);
	const [property, setProperty] = React.useState(PropertyTypes[0]);

	const applyFilters = () => {
		console.log(
			{ keyword },
			{ country },
			dayjs(date).format('DD/MM/YYYY'),
			{ price },
			{ property }
		);
	};

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
				property={property}
				setProperty={setProperty}
				applyFilters={applyFilters}
			/>
		</>
	);
};

export default Header;