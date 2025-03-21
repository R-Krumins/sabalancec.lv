<script lang="ts">
	import { goto } from '$app/navigation';
	type Props = {
		currentPage: 'signup' | 'login';
	};
	let { currentPage } = $props();
</script>

<div class="mb-8 flex w-full">
	<button
		class="w-full rounded-l-xl bg-[#42531C] p-[16px] text-white {currentPage != 'signup' &&
			'opacity-25'}"
		onclick={() => goto('/auth/signup')}
	>
		Sign up
	</button>
	<button
		class="w-full rounded-r-xl bg-[#42531C] p-[16px] text-white {currentPage != 'login' &&
			'opacity-25'}"
		onclick={() => goto('/auth/login')}
	>
		Log in
	</button>
</div>
