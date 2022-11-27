<script lang="ts">
	import { catalogStore } from '$lib/stores/Catalog.store';
	console.log('catalogStore', $catalogStore.catalogs);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		Welcome. This is a note app, where you can build your pages by small chunks. So it will be easy
		to find information you need here in future.
	</p>

	<pre class="my-5">we 💝 IT notebook</pre>
</div>
