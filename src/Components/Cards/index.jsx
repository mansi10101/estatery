import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import styles from '../../stylesheets/Cards.module.css';
import CustomCard from './CustomCard';
import { ReactComponent as NoContent } from '../../assets/no-content.svg';

const CardWrapper = ({ properties, setProperties }) => {
	return (
		<Grid container item xs={12} display='flex' className={styles.container}>
			{properties.length !== 0 ? (
				properties.map((property) => {
					return (
						<CustomCard
							key={property.id}
							properties={properties}
							property={property}
							setProperties={setProperties}
						/>
					);
				})
			) : (
				<div className={styles.noContentContainer}>
					<NoContent className={styles.noContent} />
					<Paper className={styles.noContentCaption}>
						New properties coming soon...
					</Paper>
				</div>
			)}
		</Grid>
	);
};

export default CardWrapper;
