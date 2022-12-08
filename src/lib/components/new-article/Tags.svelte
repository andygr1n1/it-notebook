<script lang="ts">
	import { newArticleStore } from '$lib/stores/NewArticle.store';
</script>

<ul class="absolute right-[-320px] top-4 flex h-fit w-[300px] max-w-[300px] flex-wrap gap-5">
	{#each $newArticleStore.tags as tag}
		<li
			class="group relative flex h-10 min-w-[50px] items-center justify-center rounded-sm bg-white p-1 shadow-xl"
		>
			<span>{tag.tag_title}</span>
			<button
				on:click={() => newArticleStore.removeTag(tag.id)}
				class="
                    remove absolute  hidden h-full w-full cursor-pointer items-center justify-center
                    bg-red-500 text-base font-bold text-red-700 transition-all duration-300 group-hover:flex"
			>
				x
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	.remove {
		/* @apply absolute right-0 top-[-7px]; */
	}
</style>
