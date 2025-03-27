import { APEX_WAREHOUSE_URL } from '$env/static/private';

export const load = async () => {
	const response = await fetch(`${APEX_WAREHOUSE_URL}/api/products`);
	const data = await response.json();
	console.log(data);
	return {
		products: data.items
	};
};
