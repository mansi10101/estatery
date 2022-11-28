import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';

const TitleBar = ({ styles, keyword, setKeyword }) => {
	return (
		<div className={styles.titleContainer}>
			<div container className={styles.title}>
				Search properties to rent
			</div>

			<div container className={styles.searchContainer}>
				<TextField
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							console.log(keyword);
						}
					}}
					sx={{ ml: 1, flex: 1, background: '#fff' }}
					placeholder='Search by keyword...'
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
					size='small'
					className={styles.searchBar}
					// variant='filled'
				/>
				<IconButton
					type='button'
					sx={{ p: '10px' }}
					aria-label='search'
					onClick={() => console.log(keyword)}
				>
					<SearchIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default TitleBar;
