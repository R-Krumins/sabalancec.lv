import { redirect, type RequestEvent } from '@sveltejs/kit';
import { authServiceLogin, setJWTCookies } from '$lib/server/auth';

export const actions = {
	default: async ({ request, cookies }: RequestEvent) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const res = await authServiceLogin(email, password);
		const data = await res.json();

		if (res.ok) {
			setJWTCookies(cookies, data);
			return redirect(303, '/');
		}

		return {
			error: 'Invalid credentials.',
			email,
			password
		};
	}
};
