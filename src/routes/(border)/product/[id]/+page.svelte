<script>
	import { PUBLIC_WAREHOUSE_URL } from '$env/static/public';
	import Banner from './Banner.svelte';
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
	<Banner name={data.name} image="{PUBLIC_WAREHOUSE_URL}/static/{data.image}" />
	<Hdecor text={data.name} />
	<Info price={data.price} reviews={null} sales={data.saleCount} />
	<AddToCart />
</div>
