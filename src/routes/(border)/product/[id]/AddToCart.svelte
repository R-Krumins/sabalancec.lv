<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { writable } from 'svelte/store';

	let itemCount = writable(1);

	function increment() {
		itemCount.update((count) => count + 1);
	}

	function decrement() {
		itemCount.update((count) => (count > 1 ? count - 1 : 1));
	}

	function handleAddToCart(): SubmitFunction {
		return () => {
			return async ({ result, update }) => {
				if (result.type === 'success') {
					alert(result.data?.message);
					await update();
				} else if (result.type === 'failure') {
					alert(result.data?.message);
				}
			};
		};
	}
</script>

<form method="POST" action="?/addToCart" use:enhance={handleAddToCart()}>
	<div class="flex items-center gap-3">
		<button
			type="button"
			on:click={decrement}
			class="poppins-bold rounded-md bg-black p-2 px-4 text-xl text-white hover:cursor-pointer hover:bg-gray-400 active:bg-gray-500"
		>
			-
		</button>
		<input
			type="number"
			bind:value={$itemCount}
			name="quantity"
			min="1"
			class="w-12 rounded border border-black p-2 text-center"
			readonly
		/>
		<button
			type="button"
			on:click={increment}
			class="poppins-bold rounded-md bg-black p-2 px-4 text-xl text-white hover:cursor-pointer hover:bg-gray-400 active:bg-gray-500"
		>
			+
		</button>
		<button
			type="submit"
			class="poppins-bold rounded-full bg-black p-2 px-4 text-xl text-white hover:cursor-pointer hover:bg-gray-800 active:bg-gray-700"
		>
			Add to cart
		</button>
	</div>
</form>
