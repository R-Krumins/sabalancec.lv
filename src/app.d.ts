// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				name: string | undefined;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type CartItem = {
		id: string;
		img: string;
		name: string;
		category: string;
		price: number;
		quantity: number;
	};
}

export {};
