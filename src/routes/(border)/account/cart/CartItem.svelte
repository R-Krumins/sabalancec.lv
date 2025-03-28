<script lang="ts">
	import cross from '$lib/images/cart/cross.svg';

	type Props = {
		item: CartItem;
		increase: (id: string) => void;
		decrease: (id: string) => void;
		deleteItem: (id: string) => void;
	};

	let { item, increase, decrease, deleteItem }: Props = $props();
</script>

<div class="Card mb-4 flex flex-nowrap rounded-2xl bg-lime-100 p-2 py-4 sm:p-6">
	<img
		src={item.img}
		alt={item.name}
		class="my-auto mr-4 h-18 w-18 rounded-lg object-cover sm:mr-6 sm:h-28 sm:w-28"
	/>
	<div class="flex flex-1 flex-wrap justify-between">
		<div class="CardTop flex w-full flex-nowrap justify-between">
			<div class="flex-1">
				<p
					class="poppins-medium max-w-full truncate overflow-hidden text-lg text-ellipsis whitespace-nowrap sm:text-xl"
				>
					{item.name}
				</p>
				<p class="mt-1 mb-2">Category: {item.category}</p>
			</div>
			<div class="w-5">
				<button class="cursor-pointer" onclick={() => deleteItem(item.id)}>
					<img src={cross} alt="Icon" class="me-4 inline-block h-5 w-5 align-middle" />
				</button>
			</div>
		</div>
		<div class="CardPrice flex flex-1">
			<div class="flex items-center">
				<button
					class="poppins-semibold w-8 cursor-pointer rounded-sm bg-lime-800 px-2 py-1 text-white"
					onclick={() => decrease(item.id)}>-</button
				>
				<input
					type="number"
					bind:value={item.quantity}
					class="poppins-semibold w-10 text-center"
					readonly
				/>
				<button
					class="poppins-semibold w-8 cursor-pointer rounded-sm bg-lime-800 px-2 py-1 text-white"
					onclick={() => increase(item.id)}>+</button
				>
			</div>
			<p class="poppins-semibold text-md ms-auto sm:text-xl">
				{(item.price * item.quantity).toFixed(2)} €
			</p>
		</div>
	</div>
</div>
