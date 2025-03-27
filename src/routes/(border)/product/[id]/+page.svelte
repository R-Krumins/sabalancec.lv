<script>
	import { PUBLIC_WAREHOUSE_URL } from '$env/static/public';
	import Info from './Info.svelte';
	import AddToCart from './AddToCart.svelte';
	import Hdecor from '$lib/components/Hdecor.svelte';

	import BackArrow from '$lib/images/common/arrow-back.svg';

	export let data;
	console.log(data);
	console.log(`${PUBLIC_WAREHOUSE_URL}/static/${data.image}`);
</script>

<div class="mx-10">
	<a href="/catalogue" class="flex gap-3">
		<img src={BackArrow} alt="back arrow" />
		<p>Catalogue</p>
	</a>
	<div class="mt-16 flex flex-wrap justify-center gap-16">
		<img
			class="rounded-4xl shadow-lg"
			src="{PUBLIC_WAREHOUSE_URL}/static/{data.image}"
			alt="product"
		/>
		<div>
			<Hdecor text={data.name} />
			<Info price={data.price} reviews={null} sales={data.saleCount} />
			<AddToCart />

			<div class="mt-8">
				<h1>Description</h1>
				<p class="poppins-light text-gray-400">Product description</p>
				<div class="my-4 border-t border-dashed border-gray-300"></div>
			</div>

			<div class="mt-8">
				<h1>Allergens</h1>
				<p class="poppins-light text-gray-400">May contain allegens</p>
				<div class="my-4 border-t border-dashed border-gray-300"></div>
			</div>
		</div>
	</div>
</div>
