POST /api/cart - Add an item to the shopping cart.
PUT /api/cart/{itemId} - Update quantity or details of an item in the cart.
DELETE /api/cart/{itemId} - Remove an item from the cart.
+server.ts used for outgoing requests in page

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { verifyJWT } from '$lib/auth';

const url = "https://sabalancec-warehouse-sanv8.ondigitalocean.app"

export const PUT = async ({ request, params }) => {
    try {
        const updatedItem = await request.json();
        const { itemId } = params as { itemId: string };

        const response = await fetch(`${url}/api/cart/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        if (!response.ok) throw error(500, 'Failed to update item in cart');

        const result = await response.json();
        return json(result);
    }
    catch (error) {
        console.log(error);
    }
}