<script lang="ts">
	import Catalog from '$lib/components/catalog/Catalog.svelte';
	import CatalogArticles from '$lib/components/catalog/catalog-articles/CatalogArticles.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<svelte:head>
	<title>IT Notebook</title>
	<meta name="it notebook" content="andygr1n1 it notebook" />
</svelte:head>

<div class="flex">
	<CatalogArticles />
</div>

<style>
</style>
