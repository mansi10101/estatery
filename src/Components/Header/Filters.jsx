import { Button, Divider, Fade, Paper, Popper, Slider } from '@mui/material';
import * as React from 'react';
import { Countries, PropertyTypes } from '../../utils/constants';
import { CustomSelect } from './CustomSelect';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function valuetext(value) {
	return `${value}°C`;
}

const Filters = ({
	styles,
	country,
	setCountry,
	date,
	setDate,
	price,
	setPrice,
	propertyType,
	setPropertyType,
	applyFilters,
}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const handleChange = (event, newValue) => {
		setPrice(newValue);
	};

	return (
		<Paper elevation={2} className={styles.filterContainer}>
			<div className={styles.filterSection}>
				<div className={styles.filterLabel}>Location</div>
				<CustomSelect
					options={Countries}
					value={country}
					onChange={(e) => {
						setCountry(e);
					}}
					defaultValue={Countries[0]}
				/>
			</div>
			<Divider orientation='vertical' flexItem />
			<div className={styles.filterSection}>
				<div className={styles.filterLabel}>When</div>
				<div className={styles.filterValue}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							disablePast
							label=''
							views={['day']}
							value={date}
							onChange={(newValue) => {
								setDate(newValue);
							}}
							renderInput={(params) => (
								<TextField variant='standard' {...params} />
							)}
						/>
					</LocalizationProvider>
				</div>
			</div>
			<Divider orientation='vertical' flexItem />

			<div className={styles.filterSection}>
				<div className={styles.filterLabel}>Price</div>
				<div className={styles.filterValue}>
					<button
						className={styles.pricePopperBtn}
						aria-describedby={id}
						type='button'
						onClick={handleClick}
					>
						{`${price[0]}$-${price[1]}$`}
					</button>
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						transition
						placement='bottom-start'
					>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={350}>
								<Paper className={styles.pricePopper} elevation={2}>
									<Slider
										getAriaLabel={() => 'Temperature range'}
										value={price}
										onChange={handleChange}
										min={0}
										max={10000}
										step={500}
										valueLabelDisplay='auto'
										getAriaValueText={valuetext}
									/>
								</Paper>
							</Fade>
						)}
					</Popper>
				</div>
			</div>
			<Divider orientation='vertical' flexItem />
			<div className={styles.filterSection}>
				<div className={styles.filterLabel}>Property Type</div>
				<CustomSelect
					options={PropertyTypes}
					value={propertyType}
					onChange={(e) => {
						setPropertyType(e);
					}}
					defaultValue={PropertyTypes[0]}
				/>
			</div>
			<Divider orientation='vertical' flexItem />
			<div className={styles.filterSection}>
				<Button color='primary' variant='contained' onClick={applyFilters}>
					Search
				</Button>
			</div>
		</Paper>
	);
};

export default Filters;
