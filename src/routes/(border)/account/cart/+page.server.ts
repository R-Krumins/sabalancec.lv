import { APEX_WAREHOUSE_URL } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import CartCookie from '$lib/server/cartCookie.js';

export const load = async ({ cookies }) => {
	return {
		items: CartCookie.get(cookies)
	};
	// const userId = cookies.get('userId');

	// if (!userId) {
	// 	throw redirect(302, '/login');
	// }

	// try {
	// 	const res = await fetch(`${APEX_WAREHOUSE_URL}/api/cart?user_id=${userId}`);

	// 	if (!res.ok) {
	// 		const errorData = await res.json();
	// 		throw error(res.status, errorData.result || 'Failed to fetch cart');
	// 	}

	// 	const data = await res.json();

	// 	return {
	// 		cart: data.result
	// 	};
	// } catch (err) {
	// 	console.error('Error fetching cart', err);
	// 	throw error(500, 'Internal server error');
	// }
};
