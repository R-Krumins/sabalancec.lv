export const load = async ({ locals }) => {
	let cardImage = 'https://placehold.co/600x400';
	return {
		items: [
			{
				id: '1',
				img: cardImage,
				name: 'Item 1',
				category: 'Category 1',
				price: 140.55,
				quantity: 1
			},
			{
				id: '2',
				img: cardImage,
				name: 'Item 2',
				category: 'Category 2',
				price: 200.0,
				quantity: 1
			}
		]
	};
};
