import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { AUTH_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, password } = await request.json();

		if (!email || !password) {
			return json({ error: 'Email and password are required' }, { status: 400 });
		}

		// Forward credentials to the auth service
		const response = await fetch(`${AUTH_URL}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		const data = await response.json();

		// Return the response with the same status code
		return json(data, { status: response.status });
	} catch (error) {
		console.error('Login error:', error);
		return json({ error: 'Authentication failed' }, { status: 500 });
	}
};
