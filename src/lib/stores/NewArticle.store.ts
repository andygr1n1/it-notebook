// import { createArticleMutation } from '$lib/xata-api/mutations/CreateArticle.mutation';
import { removeObjectWithId } from '$lib/helpers/removeObjectWithId';
import { uniq } from 'lodash-es';
import { writable } from 'svelte/store';
import { createTagsFromString } from './NewArticle.helper';
import type { INewArticleStore, ITag } from './NewArticle.interface';

const createStore = () => {
	const { update, subscribe } = writable<INewArticleStore>({
		new_article_modal_is_open: false,
		new_article_title: '',
		new_article_description: '',
		new_article_content: '',
		tags: [
			{ id: '1', tag_title: 'svelte' },
			{ id: '2', tag_title: 'react' }
		],
		new_article_tags_input: ''
	});

	const closeNewArticleMenu = () =>
		update((store) => ({ ...store, new_article_modal_is_open: false }));

	const openNewArticleMenu = () => {
		update((store) => ({ ...store, new_article_modal_is_open: true }));
	};
	// const createNewArticle = () => {
	// 	update((store) => {
	// 		createCatalogMutation(store.new_catalog_title);
	// 		return { ...store, is_catalog_open: false, new_catalog_title: '' };
	// 	});
	// 	closeNewCatalog();
	// };
	const onChangeNewArticleTitle = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) =>
		update((store) => ({
			...store,
			new_article_title: (e.target as HTMLInputElement)?.value ?? ''
		}));

	const onChangeNewArticleDescription = (
		e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }
	) =>
		update((store) => ({
			...store,
			new_article_description: (e.target as HTMLInputElement)?.value ?? ''
		}));

	const onChangeNewArticleContent = (e: { detail: { value: string } }) =>
		update((store) => ({
			...store,
			new_article_content: e.detail.value ?? ''
		}));

	const onChangeTagsInput = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) =>
		update((store) => ({
			...store,
			new_article_tags_input: (e.target as HTMLInputElement)?.value ?? ''
		}));

	const addTags = () => {
		update((store) => ({
			...store,
			tags: uniq([...store.tags, ...createTagsFromString(store.new_article_tags_input)]),
			new_article_tags_input: ''
		}));
	};

	const generateTags = () => {
		addTags();
	};

	const generateTagsOnPressEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			addTags();
		}
	};

	const removeTag = (id: string) => {
		update((store) => ({
			...store,
			tags: removeObjectWithId<ITag>(store.tags, id),
			new_article_tags_input: ''
		}));
	};

	return {
		subscribe,
		update,
		closeNewArticleMenu,
		openNewArticleMenu,
		onChangeNewArticleTitle,
		onChangeNewArticleDescription,
		onChangeNewArticleContent,
		onChangeTagsInput,
		generateTags,
		generateTagsOnPressEnter,
		removeTag
	};
};

export const newArticleStore = createStore();
