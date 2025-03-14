<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<div class="bg-[#EFF88F] pt-12">
	<div class="mx-0 rounded-[20px] bg-white pt-8 sm:mx-[6%]">
		<Header />
		<main class="mt-4 min-h-screen">
			{@render children()}
		</main>
	</div>
	<Footer />
</div>
