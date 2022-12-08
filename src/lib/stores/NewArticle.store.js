// import { createArticleMutation } from '$lib/xata-api/mutations/CreateArticle.mutation';
import { removeObjectWithId } from '$lib/helpers/removeObjectWithId';
import { uniq } from 'lodash-es';
import { writable } from 'svelte/store';
import { createTagsFromString } from './NewArticle.helper';
const createStore = () => {
    const { update, subscribe } = writable({
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
    const closeNewArticleMenu = () => update((store) => ({ ...store, new_article_modal_is_open: false }));
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
    const onChangeNewArticleTitle = (e) => update((store) => ({
        ...store,
        new_article_title: e.target?.value ?? ''
    }));
    const onChangeNewArticleDescription = (e) => update((store) => ({
        ...store,
        new_article_description: e.target?.value ?? ''
    }));
    const onChangeNewArticleContent = (e) => update((store) => ({
        ...store,
        new_article_content: e.detail.value ?? ''
    }));
    const onChangeTagsInput = (e) => update((store) => ({
        ...store,
        new_article_tags_input: e.target?.value ?? ''
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
    const generateTagsOnPressEnter = (e) => {
        if (e.key === 'Enter') {
            addTags();
        }
    };
    const removeTag = (id) => {
        update((store) => ({
            ...store,
            tags: removeObjectWithId(store.tags, id),
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
//# sourceMappingURL=NewArticle.store.js.map