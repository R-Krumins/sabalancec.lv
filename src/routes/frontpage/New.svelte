<script>
	const products = [
		{
			name: 'Dragon fruit',
			img: '/frontpage/dragon-fruit.jpg'
		},
		{
			name: 'Chia seeds',
			img: '/frontpage/chia-seeds.jpg'
		},
		{
			name: 'Pistachios',
			img: '/frontpage/pistachios.jpg'
		}
	];
</script>

<div>
	<div class="relative mb-8 inline-block">
		<img src="/frontpage/yellow-leaf.svg" alt="decor" class="absolute -top-7 right-0 z-0 size-28" />
		<h1 class="poppins-extrabold relative z-10 text-3xl">NEW PRODUCTS</h1>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each products as { name, img }, i}
			<div class="">
				<img src={img} alt={name} class="h-120 w-80 rounded-2xl object-cover" />
				<div class="mt-4 flex max-w-80 items-center justify-between">
					<div>
						<h2 class="poppins-bold">{name}</h2>
						<p class="poppins-thin">See details</p>
					</div>
					<img src="/frontpage/arrow.svg" alt="arrow" class="size-6" />
				</div>
			</div>
		{/each}
	</div>
</div>
