import * as React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles'


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
	return (
		<div className='container'>
			<ThemeProvider theme={theme}>
				<Navbar />

				<div className='header__container'>
					<Header />
				</div>
			</ThemeProvider>
		</div>
	);
};

export default Layout;
