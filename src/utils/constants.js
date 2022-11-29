export const navLinks = [
	{
		label: 'Rent',
		link: '',
		isExpandable: false,
	},
	{
		label: 'Buy',
		link: '',
		isExpandable: false,
	},
	{
		label: 'Sell',
		link: '',
		isExpandable: false,
	},
	{
		label: 'Manage Property',
		link: '',
		isExpandable: true,
	},
	{
		label: 'Resources',
		link: '',
		isExpandable: true,
	},
];
export const Countries = [
	{
		value: 'All',
		label: 'All',
	},
	{
		value: 'India',
		label: 'India',
	},
	{
		value: 'USA',
		label: 'USA',
	},
	{
		value: 'United Kingdom',
		label: 'United Kingdom',
	},
	{
		value: 'France',
		label: 'France',
	},
];

export const PropertyTypes = [
	{
		value: 'All',
		label: 'All',
	},
	{
		value: 'House',
		label: 'House',
	},
	{
		value: 'Flat',
		label: 'Flat',
	},
	{
		value: 'Villa',
		label: 'Villa',
	},
];
export const Properties = [
	//id and name of a property must be unique
	{
		id: 1,
		name: 'Palm Harbor',
		house_type: 'House',
		img_src:
			'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZSUyMHNpbmdsZSUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
		isPopular: true,
		isFav: true,
		address: '2699 Green Valley, Highland Lake, FL',
		cost: 2095,
		noOfBeds: 3,
		noOfBathrooms: 2,
		dimensions: '5x7m',
	},
	{
		id: 2,
		name: 'Beverly Springfield',
		house_type: 'Flat',
		img_src:
			'https://images.unsplash.com/photo-1625119009794-a889929e07fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
		isPopular: true,
		isFav: false,
		address: '2821 Lake Sevilla, Palm Harbor, TX',
		cost: 2700,
		noOfBeds: 4,
		noOfBathrooms: 2,
		dimensions: '6x7.5m',
	},
	{
		id: 3,
		name: 'Faulkner Ave',
		house_type: 'Flat',
		img_src:
			'https://images.unsplash.com/photo-1527788065631-346a8345936e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
		isPopular: false,
		isFav: true,
		address: '909 Woodland St, Michigan, IN',
		cost: 4550,
		noOfBeds: 4,
		noOfBathrooms: 3,
		dimensions: '8x10m',
	},
	{
		id: 4,
		name: 'Victory House',
		house_type: 'House',
		img_src:
			'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
		isPopular: false,
		isFav: false,
		address: '2699 Victory House, London, EN',
		cost: 650,
		noOfBeds: 4,
		noOfBathrooms: 4,
		dimensions: '6x7.5m',
	},
	{
		id: 5,
		name: 'Hamilton Terrace',
		house_type: 'Villa',
		img_src:
			'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMHNpbmdsZSUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
		isPopular: false,
		isFav: true,
		address: "1696 St.Jhon's Wood, NW8, London, EN",
		cost: 500,
		noOfBeds: 4,
		noOfBathrooms: 2,
		dimensions: '6x7.5m',
	},
	{
		id: 6,
		name: 'Carlyl Square',
		house_type: 'house',
		img_src:
			'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
		isPopular: true,
		isFav: false,
		address: 'Chelsea SW3, London, EN, United Kingdom',
		cost: 4999,
		noOfBeds: 4,
		noOfBathrooms: 2,
		dimensions: '6x7.5m',
	},
	{
		id: 7,
		name: 'Wilton Place',
		house_type: 'Villa',
		img_src:
			'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
		isPopular: false,
		isFav: false,
		address: 'Roehampton SW15, London, EN',
		cost: 7550,
		noOfBeds: 4,
		noOfBathrooms: 2,
		dimensions: '6x7.5m',
	},
	{
		id: 8,
		name: 'Marlborough Place',
		house_type: 'Villa',
		img_src:
			'https://images.unsplash.com/photo-1515898913320-f38370edab7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
		isPopular: false,
		isFav: true,
		address: 'Mayfair W1J, London, EN, United Kingdom',
		cost: 2500,
		noOfBeds: 4,
		noOfBathrooms: 2,
		dimensions: '6x7.5m',
	},
];