<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Hdecor from '$lib/components/Hdecor.svelte';

	const bestsellers = [
		{
			name: 'Avocados',
			img: '/frontpage/avocados.jpg',
			link: '/catalogue'
		},
		{
			name: 'Blueberries',
			img: '/frontpage/blueberries.jpg',
			link: '/catalogue'
		}
	];
</script>

<div>
	<Hdecor text="BESTSELLERS" />
	<div
		class="grid auto-rows-auto grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each bestsellers as bs}
			<ProductCard {...bs} />
		{/each}
	</div>
</div>
