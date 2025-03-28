export const load = async ({ params, cookies }) => {
	if (params.status == 'success') {
		cookies.delete('cart', { path: '/' });
		console.log('Cart deleted');
	}
	return {
		slug: params.status
	};
};
