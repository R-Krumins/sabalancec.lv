import { json } from '@sveltejs/kit';
import type { Cookies } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
//import { AUTH_URL,  } from '$env/static/private';

export const POST: RequestHandler = async ({ request, cookies }) => {
	cookies.delete('accessToken', { path: '/' });
	cookies.delete('refreshToken', { path: '/' });
	cookies.delete('userId', { path: '/' });
	cookies.delete('userName', { path: '/' });
	return json({ success: 'User logged out' }, { status: 200 });
};
