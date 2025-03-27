<script lang="ts">
	import StarFull from '$lib/images/common/star-full.svg';

	type Props = {
		price: number;
		reviews: number[] | null;
		sales: number;
	};
	const { price, reviews, sales } = $props();

	const score = reviews
		? reviews.reduce((acc: number, curr: number) => acc + curr) / reviews.length
		: 0;
</script>

<div class="mb-5 flex gap-10">
	<h1>€{price}</h1>

	<div class="flex items-center gap-1">
		<img src={StarFull} alt="star" />
		<p class="poppins-light text-gray-500">{score.toFixed(1)}</p>
		<p class="poppins-light text-gray-500">({reviews ? reviews.length : 0} Reviews)</p>
	</div>

	<p class="poppins-light text-gray-500">{sales} Sales</p>
</div>
