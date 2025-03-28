<script>
    import cross from '$lib/images/cart/cross.svg';

    let cardImage = "https://placehold.co/600x400"

    async function deleteItem() {
        //yees
    }

    async function continueToPayment() {
        //yees
    }

    //Currently individual variables bound to quantity and price
    let quantity = 1;
    let price = 140.55;

    //Item quantity functions
    function increase() {
        quantity += 1;
    }
    function decrease() {
        if (quantity > 1) {
            quantity -= 1;
        }
    }
</script>

<style>
    .CardImage {
		background-size: cover;
		background-position: center;
	}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>

<div class="align-center flex justify-center flex-wrap pt-16 pb-16 px-4 bg-contact-bg">
    <h1 class="text-5xl w-full text-center">My cart</h1>
    <div class="flex flex-wrap align-center w-4xl bg-white p-2 rounded-xl">
        <div class="Items w-full py-8">
            <!-- {#each} -->
                <div class="Card bg-lime-100 sm:p-6 p-2 py-4 rounded-2xl flex flex-nowrap mb-4">
                    <div class="CardImage my-auto h-18 sm:h-28 w-18 sm:w-28 rounded-lg mr-4 sm:mr-6" style="background-image: url({cardImage});"></div>
                    <div class="flex flex-wrap justify-between flex-1">
                        <div class="CardTop flex flex-nowrap justify-between w-full">
                            <div class="flex-1">
                                <p class="truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-full poppins-medium text-lg sm:text-xl">
                                    John Garlic Powder
                                </p>
                                <p class="mt-1 mb-2">Category: Asphalt</p>
                            </div>
                            <div class="w-5">
                                <button class="cursor-pointer" onclick={deleteItem}>
                                    <img src={cross} alt="Icon" class="inline-block align-middle w-5 h-5 me-4" />
                                </button>
                            </div>
                        </div>
                        <div class="CardPrice flex flex-1">
                            <div class="flex items-center">
                                <button class="px-2 py-1 w-8 poppins-semibold bg-lime-800 text-white rounded-sm cursor-pointer" onclick={decrease}>-</button>
                                <input type="number" bind:value={quantity} class="w-10 text-center poppins-semibold" readonly>
                                <button class="px-2 py-1 w-8 poppins-semibold bg-lime-800 text-white rounded-sm cursor-pointer" onclick={increase}>+</button>
                            </div>
                            <p class="ms-auto poppins-semibold text-md sm:text-xl">{(price * quantity).toFixed(2)} €</p>
                        </div>
                    </div>
                </div>
            <!-- {/each} -->
        </div>
        <p class="poppins-semibold text-2xl">Price details</p>
        <div class="w-full grid grid-cols-2">
            <div class="text-left poppins-regular text-gray-500 text-md">
                <p class="my-1">Total Product Price</p>
                <p class="my-1">Total Discounts</p>
                <p class="my-1">Total Taxes</p>
                <p class="my-1">Total Delivery</p>
                <p class="poppins-semibold text-xl text-black">Order Total</p>
            </div>
            <div class="text-right poppins-regular text-gray-500 text-md">
                <p class="my-1">1250 €</p>
                <p class="my-1">No discount</p>
                <p class="my-1">21%</p>
                <p class="my-1">50 €</p>
                <p class="poppins-semibold text-xl text-black">2250 €</p>
            </div>
        </div>
        <div class="w-full flex justify-center py-8">
            <button onclick={continueToPayment} class="bg-lime-600 opacity-60 text-white text-2xl px-18 py-4 rounded-2xl cursor-pointer">
                <p>Continue</p>
            </button>
        </div>
    </div>
</div>