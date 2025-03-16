<script lang="ts">
  const categories = [
    "Fruits, Seeds, Nuts",
    "Vegetables",
    "Greens",
    "Dairy",
    "Grains"
  ];

  const subcategories = {
    "Fruits, Seeds, Nuts": ["Fruits", "Seeds", "Nuts"]
  };

  const products = [
    // Fruits
    { name: "Banana", image: "/frontpage/products/banana.png", category: "Fruits" },
    { name: "Pear", image: "/frontpage/products/pear.png", category: "Fruits" },
    { name: "Apple", image: "/frontpage/products/Apple.png", category: "Fruits" },
    { name: "Avocado", image: "/frontpage/products/Avocado.png", category: "Fruits" },
    { name: "Blueberries", image: "/frontpage/products/Blueberries.png", category: "Fruits" },
    { name: "Strawberries", image: "/frontpage/products/Strawberries.png", category: "Fruits" },
    { name: "Dragonfruit", image: "/frontpage/products/Dragonfruit.png", category: "Fruits" },
    { name: "Kiwi", image: "/frontpage/products/Kiwi.png", category: "Fruits" },
    { name: "Mango", image: "/frontpage/products/Mango.png", category: "Fruits" },
    { name: "Nectarin", image: "/frontpage/products/Nectarin.png", category: "Fruits" },
    { name: "Orange", image: "/frontpage/products/Orange.png", category: "Fruits" },
    { name: "Papaya", image: "/frontpage/products/Papaya.png", category: "Fruits" },
    { name: "Peach", image: "/frontpage/products/Peach.png", category: "Fruits" },
    { name: "Pineapple", image: "/frontpage/products/pineapple.png", category: "Fruits" },
    // Nuts
    { name: "Almonds", image: "/frontpage/products/Almonds.png", category: "Nuts" },
    { name: "Walnuts", image: "/frontpage/products/Walnuts.png", category: "Nuts" },
    { name: "Cashews", image: "/frontpage/products/Cashews.png", category: "Nuts" },
    { name: "Pistachios", image: "/frontpage/products/Pistachios.png", category: "Nuts" },
    { name: "Brazil nuts", image: "/frontpage/products/Brazil nuts.png", category: "Nuts" },
    { name: "Pine nuts", image: "/frontpage/products/Pine nuts.png", category: "Nuts" },
    // Seeds
    { name: "Chia Seeds", image: "/frontpage/products/Chia seeds.png", category: "Seeds" },
    // Vegetables
    { name: "Carrots", image: "/frontpage/products/Carrots.png", category: "Vegetables" },
    { name: "Cucumber", image: "/frontpage/products/Cucumber.png", category: "Vegetables" },
    { name: "Spinach", image: "/frontpage/products/Spinach.png", category: "Vegetables" },
    { name: "Tomatoes", image: "/frontpage/products/Tomatoes.png", category: "Vegetables" },
    { name: "Bell pepper", image: "/frontpage/products/Bell pepper.png", category: "Vegetables" },
    { name: "Potatoes", image: "/frontpage/products/Potatoes.png", category: "Vegetables" },
    { name: "Jānis Ķiploks", image: "/frontpage/products/Jānis Ķiploks.png", category: "Vegetables" },
    // Dairy
    { name: "Eggs", image: "/frontpage/products/Eggs.png", category: "Dairy" },
    // Grains
    { name: "Quinoa", image: "/frontpage/products/Quinoa.png", category: "Grains" },
    { name: "Chickpeas", image: "/frontpage/products/chickpeas.png", category: "Grains" },
    { name: "Lentils", image: "/frontpage/products/Lentils.png", category: "Grains" }
  ];

  let selectedCategory = 'All Products';
  let showDropdown = false;
  let searchQuery = '';

  const filteredProducts = () => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All Products' || 
        (selectedCategory === 'Fruits, Seeds, Nuts' && 
          (product.category === 'Fruits' || product.category === 'Seeds' || product.category === 'Nuts')) || 
        product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const toggleDropdown = () => {
    showDropdown = !showDropdown;
  };

  const selectSubcategory = (subcategory: string) => {
    selectedCategory = subcategory;
    showDropdown = false;
  };
</script>

<main class="max-w-5xl mx-auto pb-8">

<!-- Banner Image -->
<section class="mb-6">
  <img src="/frontpage/fit-together.jpg" alt="Let's Get Fit Together" class="w-full">
</section>

<!-- CATALOGUE title and search Bar -->
<div class="flex justify-between items-center mb-6">
  <h2 class="text-3xl font-bold uppercase text-left">Catalogue</h2>
  <input
    type="text"
    placeholder="Search products..."
    bind:value={searchQuery}
    class="border border-gray-300 rounded-md p-2"
  />
</div>

<!-- Catalogue content -->
<div class="flex gap-6">

  <!-- Left Sidebar -->
  <aside class="w-1/4 bg-white p-6 shadow-md rounded-md self-start">
    <button class="py-2 hover:bg-gray-100 cursor-pointer underline" on:click={() => selectedCategory = 'All Products'} on:keydown={(e) => e.key === 'Enter' && (selectedCategory = 'All Products')}>
      All Products
    </button>
    <div class="mt-4">
      <ul>
        {#each categories as category}
          <li>
            <button class="py-2 hover:bg-gray-100 cursor-pointer category" on:click={() => category === 'Fruits, Seeds, Nuts' ? toggleDropdown() : selectedCategory = category} on:keydown={(e) => e.key === 'Enter' && (category === 'Fruits, Seeds, Nuts' ? toggleDropdown() : selectedCategory = category)} class:selected={selectedCategory === category}>
              {#if category === 'Fruits, Seeds, Nuts'}
                <span>{showDropdown ? '▼' : '▶'}</span>
              {/if}
              {category}
            </button>
            {#if category === 'Fruits, Seeds, Nuts'}
              <ul class="ml-4 subcategory-list" style="display: {showDropdown ? 'block' : 'none'};">
                {#each subcategories[category] as subcategory}
                  <li>
                    <button class="py-2 hover:bg-gray-100 cursor-pointer subcategory" on:click={() => selectSubcategory(subcategory)} on:keydown={(e) => e.key === 'Enter' && selectSubcategory(subcategory)} class:selected={selectedCategory === subcategory}>
                      {subcategory}
                    </button>
                    <hr class="subcategory-separator">
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
          <hr class="category-separator">
        {/each}
      </ul>
    </div>
  </aside>

  <!-- Product Grid -->
  <section class="grid grid-cols-3 gap-6 w-3/4 items-start">
    {#each filteredProducts() as product}
      <div class="bg-white p-4 text-center shadow-md rounded-md flex flex-col h-full">
        <img class="w-32 mx-auto mb-4" src={product.image} alt={product.name}>
        <p class="mt-auto">{product.name}</p>
      </div>
    {/each}
  </section>

</div>

</main>

<style>

span {
  margin-right: 8px;
}
.category {
  font-weight: bold;
}
.subcategory {
  font-weight: normal;
}
.subcategory-list {
  border-top: 1px solid #e0e0e0;
  margin-top: 8px;
  padding-top: 8px;
}
hr {
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 8px 0;
}
.category-separator {
  border-top: 2px solid #e0e0e0;
  margin: 8px 0;
}
.subcategory-separator {
  border-top: 1px solid #e0e0e0;
  margin: 4px 0;
}
.underline {
  text-decoration: underline;
}
.mt-4 {
  margin-top: 16px;
}

.grid {
  align-items: start;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.pb-8 {
  padding-bottom: 2rem;
}
.self-start {
  align-self: flex-start;
}
.h-full {
  height: 100%;
}

</style>