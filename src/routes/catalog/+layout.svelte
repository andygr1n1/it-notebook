<script lang="ts">
	import Catalog from '$lib/components/catalog/Catalog.svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { catalogStore, selectedCatalog } from '$lib/stores/Catalog.store';
	export let data: LayoutData;
	const records = data.props.records;
	const idParam: string | undefined = data.props.params.slug;

	onMount(() => {
		records.length && catalogStore.updateCatalog(records);
		idParam && selectedCatalog.set(idParam);
	});
</script>

<div class="flex h-full w-full">
	<Catalog data={data?.props?.records} />
	<slot />
</div>
