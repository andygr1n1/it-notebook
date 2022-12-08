<script lang="ts">
	import { newArticleStore } from '$lib/stores/NewArticle.store';
	import Icon from '@iconify/svelte';
</script>

<div>
	<div>Tags</div>
	<div class="my-4 flex ">
		<input
			value={$newArticleStore.new_article_tags_input}
			on:change={newArticleStore.onChangeTagsInput}
			on:keyup={newArticleStore.generateTagsOnPressEnter}
			class="h-10 w-full border bg-gray-200 p-2"
			placeholder=""
		/><button
			class="
			m-0 flex h-10 items-center justify-center border p-0 transition-all duration-300
			hover:bg-green-600"
			on:click={newArticleStore.generateTags}
		>
			<Icon icon="ic:baseline-plus" width={40} height={25} /></button
		>
	</div>
</div>
