//GET /api/cart - Retrieve the user's shopping cart.
//+page.server.ts only used for GET requests upon loading the page

import { error } from '@sveltejs/kit';
const url = "https://sabalancec-warehouse-sanv8.ondigitalocean.app"

export const load = async () => {
    const fetchCart = async () => {
        try {
            //These will be used for the actual cart
            // const userToken = cookies.get('authToken');
            // if (!userToken) throw error(401, 'User not authenticated');

            // const response = await fetch(`${url}/api/cart`, {
            //     headers: {
            //         'Authorization': `Bearer ${userToken}`,
            //     },
            // });

            //Placeholder endpoint
            const response = await fetch(`${url}/api/product`);

            //Error handling
            if (!response.ok) throw error(500, 'Failed to fetch cart');

            const data = await response.json();

            return {
                //Pass fetched data to frontend
                cartItems: data.data
            };
        } catch (error) {
            console.log(error);
            return {
                //Return empty array on error
                cartItems: []
            };
        }
    }
    let cart = await fetchCart(); //Await is necessary to get data out of a "promise"
    // console.log(JSON.stringify(cart))
    return cart;
};