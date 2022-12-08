<script lang="ts">
	import { newArticleStore } from '$lib/stores/NewArticle.store';
	import XModal from '../XModal.svelte';
	import RichText from '../quill-editor/RichText.svelte';
	import Icon from '@iconify/svelte';
	import Tags from './Tags.svelte';
	import TagsInput from './TagsInput.svelte';

	let modalTitle = 'New article';

	const onClose = () => {
		newArticleStore.closeNewArticleMenu();
	};

	const onOk = () => {
		newArticleStore.closeNewArticleMenu();
	};
</script>

{#if $newArticleStore.new_article_modal_is_open}
	<XModal {onClose} {onOk} title={modalTitle}>
		<div slot="body" class=" flex max-h-[80vh] w-full flex-col gap-6 overflow-auto py-5">
			<Tags />
			<div>
				<div>Title</div>
				<input
					class="my-4 h-10 w-full border p-2"
					value={$newArticleStore.new_article_title}
					placeholder=""
					on:input={newArticleStore.onChangeNewArticleTitle}
				/>
			</div>
			<TagsInput />
			<div>
				<div>Description</div>
				<textarea
					class="my-4 min-h-[100px] w-full border p-2"
					value={$newArticleStore.new_article_description}
					placeholder=""
					on:input={newArticleStore.onChangeNewArticleDescription}
				/>
			</div>
			<div>
				<div>Content</div>
				<div class="RichTextSmall my-4">
					<RichText
						value={$newArticleStore.new_article_content}
						onChange={newArticleStore.onChangeNewArticleContent}
					/>
				</div>
			</div>
		</div>
	</XModal>
{/if}
