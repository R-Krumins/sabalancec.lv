<script lang="ts">
	import Arrow from '$lib/images/allergens/arrow-right.svg';
	type Props = {
		name: string;
		img?: string;
		link: string;
		w?: string;
		h?: string;
	};

	const { name, img, link, w, h }: Props = $props();

	const size = w && h ? `w-${w} h-${h} object-cover` : 'w-full';
</script>

<div>
	<a class="group" href={link}>
		<img class="rounded-2xl {size}" src={img || 'https://placehold.co/230x218'} alt={name} />

		<div
			class="mt-4 flex max-w-80 items-center justify-between transition-transform duration-300 ease-in-out group-hover:scale-105"
		>
			<div>
				<h2 class="poppins-bold text-md md:text-xl">{name}</h2>
				<p class="poppins-medium md:text-md text-sm text-gray-500">See details</p>
			</div>
			<img src={Arrow} alt="arrow" class="size-4 md:size-6" />
		</div>
	</a>
</div>
