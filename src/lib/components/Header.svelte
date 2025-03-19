<script lang="ts">
	import Cart from '$lib/images/header/cart.png';
	let { userName }: { userName: string | undefined } = $props();

	function getInitials(userName: string) {
		return userName
			.split(' ')
			.map((word) => word[0]?.toUpperCase())
			.join('');
	}
</script>

<header class="flex flex-col items-center justify-between p-2 lg:flex-row lg:p-4">
	<div class="flex items-end">
		<img src="/logo-1.png" alt="logo" class="sm:h-14 md:h-18 lg:h-20" />
		<h1 class="poppins-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
			<a href="/">Sabalancec</a>
		</h1>
	</div>
	<div class="mt-4 md:mt-0">
		<nav>
			<ul
				class="poppins-regular md:text-md flex items-center justify-center gap-2
				text-sm sm:text-base md:justify-end md:gap-6 lg:text-xl"
			>
				<li><a href="/catalogue">CATALOGUE</a></li>
				<li><a href="/bestsellers">BESTSELLERS</a></li>
				<li><a href="/allergens">ALLERGENS</a></li>
				<li><a href="/contact">CONTACT</a></li>
				<li>
					{#if userName}
						<div class="flex items-center gap-2">
							<a href="/account/cart">
								<img class="size-7" src={Cart} alt="cart" />
							</a>

							<a
								href="/account"
								class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-6"
							>
								{getInitials(userName)}
							</a>
						</div>
					{:else}
						<a href="/auth/signup" class="rounded-lg bg-black p-1 text-nowrap text-white md:p-2"
							>SIGN UP</a
						>
					{/if}
				</li>
			</ul>
		</nav>
	</div>
</header>
