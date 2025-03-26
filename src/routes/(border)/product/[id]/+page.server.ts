import { WAREHOUSE_URL } from '$env/static/private';

export const load = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`${WAREHOUSE_URL}/api/products/${id}`);
	const data = await res.json();
	return {
		name: data.items[0].name,
		price: data.items[0].price,
		image: data.items[0].image,
		saleCount: data.items[0].amount_sold,
		hasAllergens: data.items[0].has_allergens === '1',
		allergenId: data.items[0].allergen_id,
		rating: data.items[0].rating
	};
};
