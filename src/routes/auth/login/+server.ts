import { json } from '@sveltejs/kit';
import type { Cookies } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { AUTH_URL, PRODUCTION } from '$env/static/private';

export const POST: RequestHandler = async ({ request, cookies }) => {
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

		if (response.ok) {
			setJWTCookies(cookies, data);
		}

		// Return the response with the same status code
		return json(data, { status: response.status });
	} catch (error) {
		console.error('Login error:', error);
		return json({ error: 'Authentication failed' }, { status: 500 });
	}
};

function setJWTCookies(cookies: Cookies, data: any) {
	cookies.set('accessToken', data.accessToken, {
		path: '/',
		httpOnly: true,
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 1 // 1 day
	});

	cookies.set('refreshToken', data.refreshToken, {
		path: '/',
		httpOnly: true,
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7 // 1 week
	});

	cookies.set('userId', data.id, {
		path: '/',
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	});

	cookies.set('userName', data.fullName, {
		path: '/',
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	});
}
