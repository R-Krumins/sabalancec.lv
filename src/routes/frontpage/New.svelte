<script>
	import Hdecor from '$lib/components/Hdecor.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	const products = [
		{
			name: 'Dragon fruit',
			img: '/frontpage/dragon-fruit.jpg',
			link: '/catalogue'
		},
		{
			name: 'Chia seeds',
			img: '/frontpage/chia-seeds.jpg',
			link: '/catalogue'
		},
		{
			name: 'Pistachios',
			img: '/frontpage/pistachios.jpg',
			link: '/catalogue'
		}
	];
</script>

<div>
	<Hdecor text="NEW PRODUCTS" />
	<div
		class="grid auto-rows-auto grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each products as { name, img, link }}
			<ProductCard w="80" h="120" {name} {img} {link} />
		{/each}
	</div>
</div>
