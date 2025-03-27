import { JSON } from '@sveltejs/kit';

<script lang="ts">

    interface CartProduct {
        id: number;
        name: string;
        category: string;
        image: string;
    }

    export let cartItems: CartProduct[] = [];
    console.log(JSON.stringify(cartItems))
</script>

<!-- <button onclick={loadCart}>Load the cart</button> -->

{#if cartItems}
    <p>Data: {JSON.stringify(cartItems)}</p>
    {#each cartItems as product}
        <p>{product.name}</p>
    {/each}
{:else}
    <p>No data loaded yet.</p>
{/if}