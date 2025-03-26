<script>
	export let data;
	console.log(data);
</script>

<div class="mx-10">
	<div
		class="h-[350px] flex-col rounded-4xl bg-[url(/frontpage/hero-bg.png)] bg-cover bg-center pt-16 pl-[10%]"
	>
		<div class="inline-block -rotate-2 bg-[#EBD96B] px-4 py-2">
			<h1 class="poppins-extrabold inline-block rotate-2 text-5xl">{data.name}</h1>
		</div>
	</div>
</div>
