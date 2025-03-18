<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	import Hero from './frontpage/Hero.svelte';
	import New from './frontpage/New.svelte';
	import Banner from './frontpage/Banner.svelte';
	import Bestsellers from './frontpage/Bestsellers.svelte';
	import MobileAd from './frontpage/MobileAd.svelte';
</script>

<div class="mb-24 space-y-12 px-[6%]">
	<Header />
	<Hero />
	<New />
</div>

<Banner />

<div class="my-24 space-y-12 px-[6%]">
	<Bestsellers />
	<MobileAd />
</div>

<Footer />
