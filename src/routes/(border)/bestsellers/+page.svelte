<script lang="ts">
    import { PUBLIC_WAREHOUSE_URL } from '$env/static/public';
    import header from '$lib/images/bestsellers/bestsellers-header.png';
    import header_blank from '$lib/images/bestsellers/bestsellers-header-blank.png';
    import arrow from '$lib/images/bestsellers/arrow-right.svg';
    import tidbit from '$lib/images/bestsellers/tidbit.svg';
	
    export let data
    const placeholderImage = "https://placehold.co/230x218";
</script>

<style>
</style>

<div class="align-center flex justify-center flex-wrap pt-4 sm:pt-16 pb-16 md:pb-32 px-4 bg-allergens-bg">
    <div class="w-7xl flex flex-wrap justify-center">
        <img src={header} alt="Header img" class="w-full hidden sm:block rounded-2xl md:rounded-4xl">
        <img src={header_blank} alt="Header img" class="w-full block sm:hidden rounded-2xl md:rounded-4xl">
        <div class="w-66 h-16 bg-yellow-200 flex sm:hidden items-center -rotate-3 justify-center -mt-22">
            <p class="poppins-black text-4xl rotate-3">BESTSELLERS</p>
        </div>
        <!-- Hidden H1 for semantics -->
        <h1 class="hidden">List of bestsellers</h1>
        <div class="w-full text-center sm:text-left">
            <img src={tidbit} alt="Icon" class="absolute z-10 w-32 h-18 ms-56 sm:ms-28"/>
            <h2 class="relative text-3xl w-full my-8 font-bold poppins-black z-20">BESTSELLERS</h2>
        </div>
        {#if data.bestsellers.length == 0}
            <p class="poppins-regular">Loading bestsellers...</p>
        {:else}
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-12">
                <!-- Only loads first 8 items -->
                {#each data.bestsellers.slice(0, 8) as bestseller}
                    <div>

                        <!--Replace empty href with updated when product view is available -->
                        <a class="flex flex-wrap items-center group" href="bestsellers">
                        <!--<a class="flex flex-wrap items-center group" href={`/product/${product.id}`}> -->

                            <!-- Img will Sometimes load a placeholder if actual image does not exist -->
                            <!-- Could implement the placeholder inside the server file or just fix it on the API end -->
                            <img 
                                class="w-full rounded-2xl" 
                                src={
                                    `${PUBLIC_WAREHOUSE_URL}/${bestseller.image}`
                                    ?
                                    `${PUBLIC_WAREHOUSE_URL}/${bestseller.image}`
                                    : placeholderImage
                                } 
                                alt={bestseller.name}
                                on:error={event => {
                                    if (event.target && event.target instanceof HTMLImageElement) {
                                        event.target.src = placeholderImage;
                                    }
                                }}>
                            <div class="flex-1 pt-3 transition-transform duration-300 ease-in-out group-hover:scale-105">
                                <h3 class="text-xl poppins-medium">{bestseller.name}</h3>
                                <h3 class="text-gray-500 poppins-medium">See details!</h3>
                            </div>
                            <div class="flex items-center justify-center">
                                <img class="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-115" src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>