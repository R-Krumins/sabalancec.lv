<script lang="ts">
	import CartItem from './CartItem.svelte';

	let { data } = $props();

	let totalPrice = $derived(data.items.reduce((acc, item) => acc + item.price * item.quantity, 0));
	let discount = $state(0);
	let taxRate = $state(0.21);
	let delivery = $state(50);
	let finalPrice = $derived((totalPrice - discount) * (1 + taxRate) + delivery);

	//Item quantity functions
	function increase(id: string) {}

	function decrease(id: string) {}

	async function deleteItem() {
		//yees
	}

	async function continueToPayment() {
		//yees
	}
</script>

<div class="align-center bg-contact-bg flex flex-wrap justify-center px-4 pt-16 pb-16">
	<h1 class="w-full text-center text-5xl">My cart</h1>
	<div class="align-center flex w-4xl flex-wrap rounded-xl bg-white p-2">
		<div class="Items w-full py-8">
			{#each data.items as item}
				<CartItem {item} {increase} {decrease} {deleteItem} />
			{/each}
		</div>
		<p class="poppins-semibold text-2xl">Price details</p>
		<div class="grid w-full grid-cols-2">
			<div class="poppins-regular text-md text-left text-gray-500">
				<p class="my-1">Total Product Price</p>
				<p class="my-1">Total Discounts</p>
				<p class="my-1">Total Taxes</p>
				<p class="my-1">Total Delivery</p>
				<p class="poppins-semibold text-xl text-black">Order Total</p>
			</div>
			<div class="poppins-regular text-md text-right text-gray-500">
				<p class="my-1">{totalPrice} €</p>
				<p class="my-1">{discount === 0 ? 'No discount' : `${discount} €`}</p>
				<p class="my-1">{taxRate * 100}%</p>
				<p class="my-1">{delivery} €</p>
				<p class="poppins-semibold text-xl text-black">{finalPrice.toFixed(2)} €</p>
			</div>
		</div>
		<div class="flex w-full justify-center py-8">
			<button
				onclick={continueToPayment}
				class="cursor-pointer rounded-2xl bg-lime-600 px-18 py-4 text-2xl text-white opacity-60"
			>
				<p>Continue</p>
			</button>
		</div>
	</div>
</div>

<style>
	.CardImage {
		background-size: cover;
		background-position: center;
	}
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
