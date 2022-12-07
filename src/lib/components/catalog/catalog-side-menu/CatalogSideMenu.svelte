<script lang="ts">
	import { goto } from '$app/navigation';
	import { catalogStore, selectedCatalog } from '$lib/stores/Catalog.store';
	import CatalogFilter from '../CatalogFilter.svelte';
	// import { setupActiveCatalog } from './setupActiveCatalog';

	// console.log('pagepath', new URL(window.location?.pathname));
	// $: setupActiveCatalog($selectedCatalog);
</script>

<nav class=" h-full w-[240px] min-w-[240px] bg-white ">
	<CatalogFilter />
	<ul class="p-5">
		{#each $catalogStore.catalogs as catalog}
			<li class={`${catalog.id === $selectedCatalog ? 'active' : ''}`}>
				<button
					class="h-full w-full text-start "
					on:click={() => {
						selectedCatalog.update(() => catalog.id);
						goto(`/catalog/${catalog.id}`);
					}}>{catalog.title}</button
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	ul {
		@apply flex flex-col gap-2;
	}
	li {
		@apply cursor-pointer border-b transition-all duration-300  hover:text-red-700;

		button {
			@apply py-2;
		}

		&.active {
			@apply text-red-700 transition-all duration-300;
		}
	}
</style>
