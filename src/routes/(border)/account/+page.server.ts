import { readJWTCookies } from '$lib/server/auth.js';

export const load = async ({ cookies }) => {
	return readJWTCookies(cookies);
};
