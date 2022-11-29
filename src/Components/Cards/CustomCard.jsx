import * as React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BiBed, BiBath } from 'react-icons/bi';
import { TbDimensions } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi';
import styles from '../../stylesheets/Cards.module.css';
import { Card, CardContent, CardMedia, Divider } from '@mui/material';

const CustomCard = ({ property, properties, setProperties }) => {
	const handleLikes = () => {
		const itemIndex = properties.findIndex((obj) => obj.id === property.id);
		const tempProperty = { ...property, isFav: !property.isFav };
		const tempProperties = [
			...properties.slice(0, itemIndex),
			tempProperty,
			...properties.slice(itemIndex + 1),
		];
		setProperties(tempProperties);
	};

	return (
		<Card sx={{ maxWidth: 345, overflow: 'visible' }} className={styles.card}>
			<div className={styles.cardImage}>
				<CardMedia
					component='img'
					height='140'
					image={property.img_src}
					alt={property.name}
					className={styles.cardImage}
				/>
			</div>

			{property.isPopular && (
				<div className={styles.cardIsPopular}>
					<HiSparkles fill={'white'} />
					<span
						className='light-text'
						style={{ color: 'whitesmoke', fontSize: '14px' }}
					>
						{' '}
						POPULAR
					</span>
				</div>
			)}
			<CardContent>
				<div className={styles.cardDetails}>
					<div className={styles.priceName}>
						<div className={styles.price}>
							${property.cost}
							<span>/month</span>
						</div>
						<div className={styles.name}>{property.name}</div>
					</div>
					<div className={styles.fav}>
						<AiFillHeart
							size={30}
							fill={property.isFav ? 'rgb(111, 101, 232)' : 'transparent'}
							strokeWidth={50}
							stroke={'rgb(111, 101, 232)'}
							onClick={handleLikes}
						/>
					</div>
				</div>
				<div className={styles.address}>{property.address}</div>
				<Divider variant='middle' />
				<div className={styles.stats}>
					<div className={styles.statDiv}>
						<BiBed fill={'rgb(111, 101, 232)'} size={20} />
						{property.noOfBeds}Beds
					</div>
					<div className={styles.statDiv}>
						<BiBath fill={'rgb(111, 101, 232)'} size={20} />
						{property.noOfBathrooms} Bathrooms
					</div>
					<div className={styles.statDiv}>
						<TbDimensions stroke={'rgb(111, 101, 232)'} size={20} />
						{property.dimensions} m<sup>2</sup>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CustomCard;
