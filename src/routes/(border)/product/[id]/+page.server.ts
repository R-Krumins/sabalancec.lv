import { APEX_WAREHOUSE_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`${APEX_WAREHOUSE_URL}/api/products/${id}`);
	const data = await res.json();
	return {
		id: data.items[0].id,
		name: data.items[0].name,
		price: data.items[0].price,
		image: data.items[0].image,
		saleCount: data.items[0].amount_sold,
		hasAllergens: data.items[0].has_allergens === '1',
		allergenId: data.items[0].allergen_id,
		rating: data.items[0].rating
	};
};

export const actions = {
	addToCart: async ({ request, params, cookies }) => {
		const productId = params.id;
		if (!productId) {
			return fail(400, {
				error: true,
				message: 'Product ID is required'
			});
		}

		const userId = cookies.get('userId');
		if (!userId) {
			return fail(401, {
				error: true,
				message: 'User authentication required'
			});
		}

		try {
			const response = await fetch(`${APEX_WAREHOUSE_URL}/api/cart`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					productId,
					user: userId,
					quantity: 1 // Default to adding 1 item
				})
			});
			console.log(response);

			if (!response.ok) {
				const errorData = await response.json();
				return fail(response.status, {
					error: true,
					message: errorData.result || 'Failed to add product to cart'
				});
			}

			return {
				error: false,
				message: 'Product added to cart successfully'
			};
		} catch (error) {
			console.error('Error adding product to cart:', error);
			return fail(500, {
				error: true,
				message: 'Internal server error'
			});
		}
	}
};
