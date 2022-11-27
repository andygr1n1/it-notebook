<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('ddddata', data);
	import { catalogStore } from '$lib/stores/Catalog.store';
	console.log('catalogStore', $catalogStore.catalogs);
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
