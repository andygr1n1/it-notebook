<script lang="ts">
	import NothingToShow from '$lib/components/NothingToShow.svelte';
	import SearchArticles from './SearchForArticles.svelte/SearchArticles.svelte';
</script>

<div class="flex h-full w-full flex-col p-5 ">
	<div class=" flex h-full w-full flex-col gap-10 rounded-md bg-white p-5">
		<SearchArticles />
		<div class="flex h-full flex-col items-center justify-center">
			<NothingToShow />
		</div>
	</div>
</div>
