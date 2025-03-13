<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<Header />

<main>
	<div class="relative min-h-screen bg-[url(/colorful-veggies.jpg)] bg-cover bg-center pt-24">
		<div class="mx-auto w-xl rounded-xl bg-white p-20">
			{@render children()}
		</div>
	</div>
</main>
<Footer />
