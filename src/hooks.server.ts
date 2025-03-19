import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// set user info in locals, if accessToken exists
	if (!!event.cookies.get('accessToken')) {
		event.locals.user = {
			name: event.cookies.get('userName')
		};
	}

	const response = await resolve(event);
	return response;
};
