<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('ddddata', data);
	import { catalogStore } from '$lib/stores/Catalog.store';
	import CatalogArticlesNavMenu from '$lib/components/catalog/catalog-articles/catalog-articles-navmenu/CatalogArticlesNavMenu.svelte';
	console.log('catalogStore', $catalogStore.catalogs);
</script>

<div class="flex h-full w-full flex-col">
	<CatalogArticlesNavMenu />
	<h1>{data.post.title}</h1>
	<div>{@html data.post.content}</div>
</div>
