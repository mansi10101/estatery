import { Grid } from '@mui/material';
import * as React from 'react';
import { Properties } from '../../utils/constants';
import styles from '../../stylesheets/Cards.module.css';
import CustomCard from './CustomCard';

const CardWrapper = () => {
	const [properties, setProperties] = React.useState(Properties);
	return (
		<Grid container xs={12} display='flex' className={styles.container}>
			{properties.map((property) => {
				return (
					<CustomCard
						properties={properties}
						property={property}
						setProperties={setProperties}
					/>
				);
			})}
		</Grid>
	);
};

export default CardWrapper;
