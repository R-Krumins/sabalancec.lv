<script>
	import { goto } from '$app/navigation';
</script>

<div
	class="h-[600px] flex-col rounded-4xl bg-[url(/frontpage/hero-bg.png)] bg-cover bg-center pt-16 pl-[10%] md:h-[700px]"
>
	<div class=" text-6xl text-white md:text-8xl">
		<div class="inline-block rotate-2 bg-black px-4 py-2">
			<h1 class="poppins-extrabold inline-block -rotate-2">LET'S</h1>
		</div>

		<h1 class="poppins-extrabold">GET</h1>

		<div class="inline-block -rotate-2 bg-[#8CB53F] px-4 py-2">
			<h1 class="poppins-extrabold inline-block rotate-2">FIT</h1>
		</div>

		<h1 class="poppins-extrabold">TOGETHER.</h1>
	</div>

	<h2 class="poppins-regular mt-6 text-2xl text-white">Live best and healthy life!</h2>

	<button
		class="poppins-bold mt-6 rounded-2xl bg-white px-6 py-4 text-xl text-black"
		onclick={() => goto('/catalogue')}>Shop Now</button
	>
</div>
