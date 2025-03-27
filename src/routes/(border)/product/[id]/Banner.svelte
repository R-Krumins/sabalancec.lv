<script lang="ts">
	type Props = {
		name: string;
		image: string;
	};
	const { name, image }: Props = $props();
</script>

<div
	class="h-[350px] flex-col rounded-4xl bg-cover bg-center pt-16 pl-[10%]"
	style="background-image: url('{image}'); image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
>
	<div class="inline-block -rotate-2 bg-[#EBD96B] px-4 py-2">
		<h1 class="poppins-extrabold inline-block rotate-2 text-5xl">{name}</h1>
	</div>
</div>
