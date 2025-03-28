<script lang="ts">
	import cross from '$lib/images/cart/cross.svg';

	type Props = {
		id: string;
		img: string;
		name: string;
		category: string;
		price: number;
		quantity: number;

		increase: (id: string) => void;
		decrease: (id: string) => void;
		deleteItem: (id: string) => void;
	};

	let { id, img, name, category, price, quantity, increase, decrease, deleteItem }: Props =
		$props();
</script>

<div class="Card mb-4 flex flex-nowrap rounded-2xl bg-lime-100 p-2 py-4 sm:p-6">
	<div
		class="CardImage my-auto mr-4 h-18 w-18 rounded-lg sm:mr-6 sm:h-28 sm:w-28"
		style="background-image: url({img});"
	></div>
	<div class="flex flex-1 flex-wrap justify-between">
		<div class="CardTop flex w-full flex-nowrap justify-between">
			<div class="flex-1">
				<p
					class="poppins-medium max-w-full truncate overflow-hidden text-lg text-ellipsis whitespace-nowrap sm:text-xl"
				>
					{name}
				</p>
				<p class="mt-1 mb-2">Category: {category}</p>
			</div>
			<div class="w-5">
				<button class="cursor-pointer" onclick={() => deleteItem(id)}>
					<img src={cross} alt="Icon" class="me-4 inline-block h-5 w-5 align-middle" />
				</button>
			</div>
		</div>
		<div class="CardPrice flex flex-1">
			<div class="flex items-center">
				<button
					class="poppins-semibold w-8 cursor-pointer rounded-sm bg-lime-800 px-2 py-1 text-white"
					onclick={() => decrease(id)}>-</button
				>
				<input
					type="number"
					bind:value={quantity}
					class="poppins-semibold w-10 text-center"
					readonly
				/>
				<button
					class="poppins-semibold w-8 cursor-pointer rounded-sm bg-lime-800 px-2 py-1 text-white"
					onclick={() => increase(id)}>+</button
				>
			</div>
			<p class="poppins-semibold text-md ms-auto sm:text-xl">{(price * quantity).toFixed(2)} €</p>
		</div>
	</div>
</div>
