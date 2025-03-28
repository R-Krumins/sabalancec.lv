import type { Cookies } from '@sveltejs/kit';
import { AUTH_URL, PRODUCTION } from '$env/static/private';

type UserInfo = {
	id: string;
	fullName: string;
	email: string;
	address: string;
};

export async function authServiceLogin(email: any, password: any) {
	return await fetch(`${AUTH_URL}/api/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email, password })
	});
}

export async function authServiceRegister(fullName: any, address: any, email: any, password: any) {
	return await fetch(`${AUTH_URL}/api/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ fullName, address, email, password })
	});
}

export function setJWTCookies(cookies: Cookies, data: any) {
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

	cookies.set('userAddress', data.address, {
		path: '/',
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	});

	cookies.set('userEmail', data.email, {
		path: '/',
		secure: PRODUCTION === 'yes',
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	});
}

export function readJWTCookies(cookies: Cookies): UserInfo {
	const id = cookies.get('userId') || '';
	const fullName = cookies.get('userName') || '';
	const email = cookies.get('userEmail') || '';
	const address = cookies.get('userAddress') || '';

	return { id, fullName, email, address };
}
