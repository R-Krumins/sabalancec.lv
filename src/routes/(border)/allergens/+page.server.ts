export const load = async () => {
    const fetchAllergens = async () => {
        try {
            //API call on server only
            const response = await fetch('https://sabalancec-warehouse-sanv8.ondigitalocean.app/api/allergen')
            const result = await response.json()
            // console.log("All allergen data fetched!")
            return {
                allergens: result.data
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const data = await fetchAllergens(); //Await is necessary to get data out of a "promise"
    return data;
}
