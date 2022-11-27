<script lang="ts">
	import { goto } from '$app/navigation';
	import { catalogStore } from '$lib/stores/Catalog.store';
	import CatalogFilter from './CatalogFilter.svelte';
</script>

<nav class=" w-[240px] min-w-[240px] bg-white ">
	<CatalogFilter />
	<ul class="p-5">
		{#each $catalogStore.catalogs as catalog}
			<li>
				<button class="h-full w-full text-start" on:click={() => goto(`/catalog/${catalog.id}`)}
					>{catalog.title}</button
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
		@apply cursor-pointer border-b transition-colors duration-300  hover:text-red-700;

		button {
			@apply py-2;
		}
	}
</style>
