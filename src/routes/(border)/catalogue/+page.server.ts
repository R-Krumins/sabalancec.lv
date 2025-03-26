export const load = async () => {
    const response = await fetch('https://sabalancec-warehouse-sanv8.ondigitalocean.app/api/product');
    const result = await response.json();
  
    return {
      products: result.data
    };
};