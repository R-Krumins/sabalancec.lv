<script lang="ts">

    //This is just an example for returning data from page.server
        //return {
        //    products: result.data
        //};
        //export let data: { products: { name: string; image: string; category: string }[] };
        //let products = data.products;

    export let data: { 
        user: { token: string } | null;
        cartItems: { 
            id: string; 
            name: string; 
            image: string; 
            category: string;
            quantity: number;
        }[] 
    };

    let cartItems = data.cartItems;
    let token = data.user?.token || '';

    //Pass number, number, string
    //updateCartItem(itemId, quantity, token)

    //Pass number, string
    //deleteCartItem(itemId, token)

</script>

<!-- <button onclick={loadCart}>Load the cart</button> -->

{#if cartItems}
    {#each cartItems as product}
        <p>{product.name}</p>
    {/each}
{:else}
    <p>No data loaded yet.</p>
{/if}