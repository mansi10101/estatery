import { Box, Divider, Fade, Paper, Popper, Slider } from '@mui/material';
import * as React from 'react';
import { Countries } from '../../utils/constants';
import { CustomSelect } from './CustomSelect';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Filters = ({
	styles,
	country,
	setCountry,
	date,
	setDate,
	price,
	setPrice,
}) => {
	console.log(country);
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((previousOpen) => !previousOpen);
	};

	const canBeOpen = open && Boolean(anchorEl);
	const id = canBeOpen ? 'transition-popper' : undefined;

	return (
		<div className={styles.filterContainer}>
			<div className={styles.filterSection}>
				<div className={styles.filterLabel}>Locatiosn</div>
				<CustomSelect
					options={Countries}
					value={country}
					onChange={(e) => {
						setCountry(e ? e.value : undefined);
					}}
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
					<button aria-describedby={id} type='button' onClick={handleClick}>
						Toggle Popper
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
										getAriaLabel={() => 'Price range'}
										value={price}
										onChange={(e, newValue) => setPrice(newValue)}
										valueLabelDisplay='auto'
										getAriaValueText={`${price}`}
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
				<div className={styles.filterValue}>Houses</div>
			</div>
			<Divider orientation='vertical' flexItem />
			<div className={styles.filterSection}>
				<button>Search</button>
			</div>
		</div>
	);
};

export default Filters;
