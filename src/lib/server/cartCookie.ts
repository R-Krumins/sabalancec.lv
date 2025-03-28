import type { Cookies } from '@sveltejs/kit';

class CartCookie {
	static add(cookies: Cookies, cartItem: CartItem) {
		// Get existing cart from cookies
		const existingCart = cookies.get('cart');
		let cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

		// Check if product is already in cart
		const existingProductIndex = cart.findIndex((x: CartItem) => x.id === cartItem.id);

		if (existingProductIndex !== -1) {
			// Increment quantity if product already exists
			cart[existingProductIndex].quantity += cartItem.quantity;
		} else {
			// Add new product to cart
			cart.push(cartItem);
		}

		// Save updated cart to cookies
		this.save(cookies, cart);

		return cart;
	}

	static get(cookies: Cookies): CartItem[] {
		const existingCart = cookies.get('cart');
		if (!existingCart) {
			return [];
		}
		return JSON.parse(existingCart);
	}

	static save(cookies: Cookies, cart: CartItem[]) {
		cookies.set('cart', JSON.stringify(cart), {
			path: '/',
			httpOnly: false,
			secure: process.env.PRODUCTION === 'yes',
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});
	}
}

export default CartCookie;
