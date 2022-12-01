<script lang="ts">
	import type { ICatalog } from '$lib/stores/Catalog.store';

	import CatalogSideMenu from './catalog-side-menu/CatalogSideMenu.svelte';

	export const data: ICatalog[] = [];
</script>

<CatalogSideMenu />
