<script lang="ts">
	import type { LayoutData } from './$types';
	// import { onMount } from 'svelte';
	// import { catalogStore, selectedCatalog } from '$lib/stores/Catalog.store';
	// export let data: LayoutData;
	// const records = data.props.records;
	// const idParam: string | undefined = data.props.params.slug;

	// onMount(() => {
	// 	records.length && catalogStore.updateCatalog(records);
	// 	idParam && selectedCatalog.set(idParam);
	// });
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import { generateHasuraClient } from '$lib/graphql/client';
	import { request, gql } from 'graphql-request';
</script>

<QueryClientProvider client={generateHasuraClient()}
	><div class="flex h-full w-full">
		<slot />
	</div>
</QueryClientProvider>
