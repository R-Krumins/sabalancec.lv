import { APEX_WAREHOUSE_URL, WAREHOUSE_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import CartCookie from '$lib/server/cartCookie';

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
		const formData = await request.formData();
		const quantity = formData.get('quantity');

		const productId = params.id;
		if (!productId) {
			return fail(400, {
				error: true,
				message: 'Product ID is required'
			});
		}

		console.log('addToCart', productId, quantity);

		try {
			const res = await fetch(`${APEX_WAREHOUSE_URL}/api/products/${productId}`);
			const data = await res.json();

			CartCookie.add(cookies, {
				id: data.items[0].id,
				name: data.items[0].name,
				img: `${WAREHOUSE_URL}/static/${data.items[0].image}`,
				category: data.items[0].category,
				price: data.items[0].price,
				quantity: Number(quantity)
			});

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

		// const userId = cookies.get('userId');
		// if (!userId) {
		// 	return fail(401, {
		// 		error: true,
		// 		message: 'User authentication required'
		// 	});
		// }

		// try {
		// 	const response = await fetch(`${APEX_WAREHOUSE_URL}/api/cart`, {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			productId,
		// 			user: userId,
		// 			quantity: 1 // Default to adding 1 item
		// 		})
		// 	});
		// 	console.log(response);

		// 	if (!response.ok) {
		// 		const errorData = await response.json();
		// 		return fail(response.status, {
		// 			error: true,
		// 			message: errorData.result || 'Failed to add product to cart'
		// 		});
		// 	}

		// 	CartCookie.add(cookies, productId);

		// 	return {
		// 		error: false,
		// 		message: 'Product added to cart successfully'
		// 	};
		// } catch (error) {
		// 	console.error('Error adding product to cart:', error);
		// 	return fail(500, {
		// 		error: true,
		// 		message: 'Internal server error'
		// 	});
		// }
	}
};
