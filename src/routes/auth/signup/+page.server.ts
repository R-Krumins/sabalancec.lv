import { redirect, type RequestEvent } from '@sveltejs/kit';
import { authServiceLogin, authServiceRegister, setJWTCookies } from '$lib/server/auth';

export const actions = {
	default: async ({ request, cookies }: RequestEvent) => {
		const formData = await request.formData();
		const fullname = formData.get('fullname');
		const address = formData.get('address');
		const email = formData.get('email');
		const password = formData.get('password');

		const res = await authServiceRegister(fullname, address, email, password);
		const data = await res.json();

		if (res.ok) {
			return redirect(303, '/auth/login');
		}

		return {
			error: data.error
		};
	}
};
