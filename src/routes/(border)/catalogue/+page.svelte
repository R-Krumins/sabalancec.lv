<script lang="ts">
  import { onMount } from 'svelte';

  const categories = [
    "Fruits, Seeds, Nuts",
    "Vegetables",
    "Greens",
    "Dairy",
    "Grains",
    "Legumes",
    "Specialty"
  ];

  const subcategories = {
    "Fruits, Seeds, Nuts": ["Fruits", "Seeds", "Nuts"]
  };

  interface Product {
    name: string;
    image: string;
    category: string;
  }

  let products: Product[] = []; 
  let selectedCategory = 'All Products';
  let showDropdown = false;
  let searchQuery = '';
  let loading = true; // Add a loading state

  // Fetch products from the correct API endpoint
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://sabalancec-warehouse-sanv8.ondigitalocean.app/api/product');
      const data = await response.json();
      if (data.success) {
        products = data.data.map((product: { name: string; image: string; category: string }) => ({
          name: product.name,
          image: product.image, // Use the image path directly
          category: product.category
        }));
      } else {
        console.error('Failed to fetch products:', data.msg);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      loading = false; // Set loading to false after fetching
    }
  };

  // Filter products based on category and search query
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

  // Fetch products when the component is mounted
  onMount(() => {
    fetchProducts();
  });
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
    {#if loading}
      <p>Loading products...</p>
    {:else if filteredProducts().length === 0}
      <p>No products found.</p>
    {:else}
      {#each filteredProducts() as product}
        <div class="bg-white p-4 text-center shadow-md rounded-md flex flex-col h-full">
          <img
            class="w-32 mx-auto mb-4"
            src={`https://sabalancec-warehouse-sanv8.ondigitalocean.app/static/${product.image}`}
            alt={product.name}
          >
          <p class="mt-auto">{product.name}</p>
        </div>
      {/each}
    {/if}
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