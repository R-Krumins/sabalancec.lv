<script lang="ts">
	const { name, ...rest } = $props();
</script>

<div class="mb-4">
	<label class="poppins-thin" for={name}>
		<slot />
	</label>
	<br />
	<input
		id={name}
		{name}
		{...rest}
		class="border-px w-full rounded-xl border border-[#666666] p-2"
	/>
</div>
