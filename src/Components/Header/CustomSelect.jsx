import * as React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, contained, onChange, defaultValue }) => {
	const style = {
		control: (styles) => ({
			...styles,
			backgroundColor: contained ? '#fff' : 'transparent',
			color: '#484554',
			border: contained ? '1px solid #C9C9C9' : 'none',
			outline: 'none',
			fontSize: '1rem',
			fontWeight: 700,
			width: '100%',
			minWidth: '200px',
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
				// isClearable={true}
				isSearchable={true}
				options={options}
				styles={style}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</>
	);
};

export { CustomSelect };
