<script>
    import header from '$lib/images/allergens/allergens-header.png';
    import header_blank from '$lib/images/allergens/allergens-header-blank.png';
    import arrow from '$lib/images/allergens/arrow-right.svg';
    import tidbit from '$lib/images/allergens/tidbit.svg';

    const temporaryCardData = [
    {
        title: "Corn",
        url: "/allergens/corn"
    },
    {
        title: "Fish",
        url: "/allergens/fish"
    },
    {
        title: "Milk",
        url: "/allergens/milk"
    },
    {
        title: "Eggs",
        url: "/allergens/eggs"
    },
    {
        title: "Fruits",
        url: "/allergens/fruits"
    },
    {
        title: "Gelatin",
        url: "/allergens/gelatin"
    },
    {
        title: "Meat",
        url: "/allergens/meat"
    },
    {
        title: "Peanut",
        url: "/allergens/peanut"
    },
    {
        title: "Seed",
        url: "/allergens/seed"
    },
    {
        title: "Sesame",
        url: "/allergens/sesame"
    },
    {
        title: "Shell Fish",
        url: "/allergens/shell-fish"
    },
    {
        title: "Soy",
        url: "/allergens/soy"
    },
    {
        title: "Spice",
        url: "/allergens/spice"
    },
    {
        title: "Tree Nut",
        url: "/allergens/tree-nut"
    },
    {
        title: "Tree Pollen",
        url: "/allergens/tree-pollen"
    },
    {
        title: "Wheat",
        url: "/allergens/wheat"
    }
];
</script>

<style>
</style>

<div class="align-center flex justify-center flex-wrap pt-4 sm:pt-16 pb-16 md:pb-32 px-4 bg-allergens-bg">
    <div class="w-7xl flex flex-wrap justify-center">
        <img src={header} alt="Header img" class="w-full hidden sm:block rounded-2xl md:rounded-4xl">
        <img src={header_blank} alt="Header img" class="w-full block sm:hidden rounded-2xl md:rounded-4xl">
        <div class="w-66 h-16 bg-yellow-200 flex sm:hidden items-center -rotate-3 justify-center -mt-22">
            <p class="poppins-black text-4xl rotate-3">ALLERGENS</p>
        </div>
        <!-- Hidden H1 for semantics -->
        <h1 class="hidden">List of allergens</h1>
        <div class="w-full text-center sm:text-left">
            <img src={tidbit} alt="Icon" class="absolute z-10 w-32 h-18 ms-56 sm:ms-28"/>
            <h2 class="relative text-3xl w-full my-8 font-bold poppins-black z-20">Watch out!</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-y-10 gap-x-12">
            {#each temporaryCardData as card}
            <div>
                <a class="flex flex-wrap items-center group" href={card.url}>
                    <img class="w-full rounded-2xl" src="https://placehold.co/230x218" alt={card.title}>
                    <div class="flex-1 pt-3 transition-transform duration-300 ease-in-out group-hover:scale-105">
                        <h3 class="text-xl poppins-medium">{card.title}</h3>
                        <h3 class="text-gray-500 poppins-medium">See details!</h3>
                    </div>
                    <div class="flex items-center justify-center">
                        <img class="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-115" src={arrow} alt=""/>
                    </div>
                </a>
            </div>
            {/each}
        </div>
    </div>
</div>