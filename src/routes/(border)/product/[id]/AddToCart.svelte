<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

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
			type="submit"
			class="poppins-bold rounded-full bg-black p-2 px-4 text-xl text-white hover:cursor-pointer hover:bg-gray-800 active:bg-gray-700"
		>
			+
		</button>
		<p class="text-lg">Add to cart</p>
	</div>
</form>
