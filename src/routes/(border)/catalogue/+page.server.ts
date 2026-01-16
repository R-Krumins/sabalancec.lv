import { WAREHOUSE_URL } from '$env/static/private';

export const load = async () => {
	const response = await fetch(`${WAREHOUSE_URL}/api/product`);
	const data = await response.json();
	//console.log(data);
	return {
		products: data.data
	};
};
