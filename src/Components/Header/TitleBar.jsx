import * as React from 'react';
import { CustomSelect } from './CustomSelect';
import { QuickSearch } from '../../utils/constants';

const TitleBar = ({ styles, quickSearch, setQuickSearch }) => {
	return (
		<div className={styles.titleContainer}>
			<div className={styles.title}>Search properties to rent</div>

			<div className={styles.searchContainer}>
				<CustomSelect
					options={QuickSearch}
					value={quickSearch}
					onChange={(e) => {
						setQuickSearch(e);
					}}
					defaultValue={QuickSearch[0]}
					contained={true}
				/>
			</div>
		</div>
	);
};

export default TitleBar;
