<script lang="ts">
	export let data;
	let message = '';
	let type = '';

	if (data.slug === 'success') {
		message = 'Payment was successful!';
		type = 'bg-green-500 text-white';
	} else if (data.slug === 'cancel') {
		message = 'Payment was canceled.';
		type = 'bg-red-500 text-white';
	}
</script>

<div class="mx-16 mt-16">
	<div class={`rounded-md p-4 font-bold ${type} `}>
		{message}
	</div>
	<a
		href="/"
		class="poppins-bold mx-auto mt-4 block w-[40%] rounded-md bg-black px-4 py-2 text-center text-white"
		>Return to Home</a
	>
</div>
