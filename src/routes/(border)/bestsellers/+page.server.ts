import { PUBLIC_WAREHOUSE_URL } from '$env/static/public';

export const load = async () => {
    const fetchBestsellers = async () => {
        try {
            //API call on server only
            //Update endpoint to actual bestsellers whenever available
            const response = await fetch(`${PUBLIC_WAREHOUSE_URL}/api/product`)
            const result = await response.json()
            // console.log("All bestseller data fetched!")
            return {
                bestsellers: result.data
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const data = await fetchBestsellers(); //Await is necessary to get data out of a "promise"
    return data;
}
