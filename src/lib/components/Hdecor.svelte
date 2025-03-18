<script lang="ts">
	const { text }: { text: string } = $props();
</script>

<div class="relative mb-8 inline-block">
	<img src="/frontpage/yellow-leaf.svg" alt="decor" class="absolute -top-7 right-0 z-0 size-28" />
	<h1 class="poppins-extrabold relative z-10 text-3xl">{text}</h1>
</div>
