<script lang="ts">
    import header from '$lib/images/allergens/allergens-header.png';
    import header_blank from '$lib/images/allergens/allergens-header-blank.png';
    import arrow_back from '$lib/images/allergens/arrow-back.svg';
    import tidbit from '$lib/images/allergens/tidbit.svg';

    export let data
    console.log(data.allergen.name)
</script>

<div class="align-center flex justify-center flex-wrap pt-4 sm:pt-16 pb-16 md:pb-32 px-4 bg-allergens-bg">
    <div class="w-7xl flex flex-wrap justify-center">
        <a href="/allergens" class="w-full Breadcrumb flex">
            <img src={arrow_back} alt="Icon" class="h-6 w-5 me-3 my-auto"/>
            <p class="w-full text-left my-4">Allergens</p>
        </a>
        <img src={header} alt="Header img" class="w-full hidden sm:block rounded-2xl md:rounded-4xl">
        <img src={header_blank} alt="Header img" class="w-full block sm:hidden rounded-2xl md:rounded-4xl">
        <div class="w-66 h-16 bg-yellow-200 flex sm:hidden items-center -rotate-3 justify-center -mt-22">
            <p class="poppins-black text-4xl rotate-3">ALLERGENS</p>
        </div>
        <!-- Hidden H1 for semantics -->
        <h1 class="hidden">{data.allergen.name} allergy</h1>

        <div class="w-full flex justify-center sm:justify-normal">
            <p class="font-bold my-8 poppins-black text-3xl z-20 ms-12 sm:ms-0">{data.allergen.name}</p>
            <img src={tidbit} alt="Icon" class="z-10 w-32 h-18 -ms-16"/>
        </div>

        {#each data.allergen.info as block}
            <h2 class="text-2xl poppins-semibold text-center sm:text-left w-full">{block.section}</h2>
            <p class="mt-4 mb-10 text-gray-500 text-center sm:text-left w-full">{block.text}</p>
        {/each}
    </div>
</div>