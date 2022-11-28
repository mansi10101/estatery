import * as React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, value, onChange }) => {
	const style = {
		control: (styles) => ({
			...styles,
			backgroundColor: 'transparent',
			color: '#484554',
			border: 'none',
			outline: 'none',
			fontSize: '1rem',
			fontWeight: 700,
			width: '100%',
		}),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isDisabled
					? undefined
					: isSelected
					? '#6F64EF'
					: isFocused
					? '#6F64EF'
					: 'transparent',
				color: isSelected ? 'white' : isFocused ? 'white' : '#484554',
				padding: '4px',
			};
		},
	};

	return (
		<>
			<Select
				isClearable={true}
				isSearchable={true}
				options={options}
				styles={style}
				onChange={onChange}
			/>
		</>
	);
};

export { CustomSelect };
