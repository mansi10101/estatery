import React from 'react';
import TitleBar from './TitleBar';
import styles from '../../stylesheets/Header.module.css';
import Filters from './Filters';

const Header = ({
	country,
	setCountry,
	date,
	setDate,
	price,
	setPrice,
	propertyType,
	setPropertyType,
	applyFilters,
	quickSearch,
	setQuickSearch,
}) => {
	return (
		<>
			<TitleBar
				styles={styles}
				quickSearch={quickSearch}
				setQuickSearch={setQuickSearch}
			/>

			<Filters
				styles={styles}
				country={country}
				setCountry={setCountry}
				date={date}
				setDate={setDate}
				price={price}
				setPrice={setPrice}
				setPropertyType={setPropertyType}
				propertyType={propertyType}
				applyFilters={applyFilters}
			/>
		</>
	);
};

export default Header;
