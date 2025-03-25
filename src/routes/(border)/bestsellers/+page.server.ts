export const load = async () => {
    const fetchBestsellers = async () => {
        try {
            //API call on server only
            //Update endpoint to actual bestsellers whenever available
            const response = await fetch('https://sabalancec-warehouse-sanv8.ondigitalocean.app/api/product')
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
