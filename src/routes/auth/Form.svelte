<script lang="ts">
	type Props = {
		items: { label: string; name: string }[];
		onsubmit: (e: Event) => void;
		submitBtnName: string;
	};
	const { items, onsubmit, submitBtnName }: Props = $props();
</script>

<form {onsubmit} class="mt-8">
	{#each items as { label, name }}
		<div class="mb-4">
			<label class="poppins-thin" for={name}>{label}</label>
			<br />
			<input
				type={name === 'password' ? 'password' : 'text'}
				id={name}
				{name}
				required
				class="border-px w-full rounded-xl border border-[#666666] p-2"
			/>
		</div>
	{/each}
	<div class="mt-8">
		<button type="submit" class="poppins-bold w-full rounded-xl bg-[#42531C] p-2 text-white">
			{submitBtnName}
		</button>
	</div>
</form>
