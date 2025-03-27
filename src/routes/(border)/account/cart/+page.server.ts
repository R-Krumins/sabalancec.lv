//GET /api/cart - Retrieve the user's shopping cart.
//+page.server.ts only used for GET requests upon loading the page

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const url = "https://sabalancec-warehouse-sanv8.ondigitalocean.app";

export const load: PageServerLoad = async ({ locals, cookies }) => {
    try {
        // Retrieve user authentication token
        const userToken = cookies.get('authToken');
        if (!userToken) throw error(401, 'User not authenticated');

        //These will be used for the actual cart endpoint
            // const userToken = cookies.get('authToken');

            // const response = await fetch(`${url}/api/cart`, {
            //     headers: {
            //         'Authorization': `Bearer ${userToken}`,
            //     },
            // });

        //Placeholder endpoint
        const response = await fetch(`${url}/api/product`);
        const result = await response.json();

        return {
            user: locals.user || null, //Pass user to frontend if exists
            cartItems: result.data
        };
    } catch (error) {
        console.error('Failed to fetch cart:', error);
        return {
            user: locals.user || null,
            cartItems: []
        };
    }
};