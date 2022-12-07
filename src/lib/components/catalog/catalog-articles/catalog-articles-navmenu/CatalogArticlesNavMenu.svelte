<script lang="ts">
	import { newArticleStore } from '$lib/stores/NewArticle.store';

	const onClick = () => newArticleStore.openNewArticleMenu();
</script>

<div class="flex h-10 w-full items-center  justify-between gap-5 border-b-gray-300 bg-gray-50 px-5">
	<div
		class="flex cursor-pointer items-center text-xs font-bold transition-all hover:text-red-700 hover:underline"
	>
		<button class="font-bold" on:click={onClick}>+new article</button>
	</div>
	<input value="search" class="flex items-center rounded-sm border p-1 text-xs font-bold" />
</div>
