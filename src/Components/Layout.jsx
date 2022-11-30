import * as React from 'react';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import CardWrapper from './Cards';
import {
	Countries,
	Properties,
	PropertyTypes,
	QuickSearch,
} from '../utils/constants';

const theme = createTheme({
	palette: {
		primary: {
			main: '#6F64EF',
		},
		secondary: {
			main: '#ff906e',
		},
		info: {
			main: '#484554',
		},
	},
});

const Layout = () => {
	const [properties, setProperties] = React.useState(Properties);
	const [country, setCountry] = React.useState(Countries[0]);
	const [date, setDate] = React.useState(new Date());
	const [price, setPrice] = React.useState([0, 10000]);
	const [propertyType, setPropertyType] = React.useState(PropertyTypes[0]);
	const [quickSearch, setQuickSearch] = React.useState(QuickSearch[0]);
	const [refresh, setRefresh] = React.useState(true);

	const filtering = (property) => {
		let isCountry =
			country.value === 'All'
				? true
				: country.value.toLowerCase() === property.country.toLowerCase();

		let isPrice = property.cost >= price[0] && property.cost <= price[1];

		let isPropertyType =
			propertyType.value === 'All'
				? true
				: propertyType.value.toLowerCase() ===
				  property.house_type.toLowerCase();

		let isPopular = quickSearch.value === 'All' ? true : property.isPopular;

		let isDate = new Date(date) < new Date(property.availableFrom);

		return isCountry && isPrice && isPropertyType && isDate && isPopular;
	};

	React.useEffect(() => {
		const temp = Properties.filter(filtering);
		setProperties(temp);
	}, [refresh, quickSearch]);

	const applyFilters = () => {
		setRefresh(!refresh);
	};
	return (
		<div className='container'>
			<ThemeProvider theme={theme}>
				<Navbar />

				<div className='header__container'>
					<Header
						country={country}
						setCountry={setCountry}
						date={date}
						setDate={setDate}
						price={price}
						setPrice={setPrice}
						propertyType={propertyType}
						setPropertyType={setPropertyType}
						applyFilters={applyFilters}
						quickSearch={quickSearch}
						setQuickSearch={setQuickSearch}
					/>
				</div>
				<div className='content__container'>
					<CardWrapper properties={properties} setProperties={setProperties} />
				</div>
			</ThemeProvider>
		</div>
	);
};

export default Layout;
