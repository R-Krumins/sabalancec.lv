<script lang="ts">
	const { msg }: { msg: string | undefined } = $props();
</script>

{#if msg}
	<div class="rounded border border-red-600 bg-red-100 p-2 text-sm text-red-600">
		{msg}
	</div>
{/if}
