export const load = async ({ params }) => {
    //Unique ID parameter from URL
    const { id } = params;
    console.log(id)
    const fetchAllergen = async () => {
        try {
            //API call on server only including allergen ID
            const response = await fetch(`https://sabalancec-warehouse-sanv8.ondigitalocean.app/api/allergen/${id}`)
            const result = await response.json()
            // console.log("Single allergen data fetched!")
            return {
                allergen: result.data
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const data = await fetchAllergen(); //Await is necessary to get data out of a "promise"
    return data;
}
