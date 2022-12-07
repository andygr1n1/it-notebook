// import { createCatalogMutation } from '$lib/xata-api/mutations/CreateCatalog.mutation';
import { writable } from 'svelte/store';
const createStore = () => {
    const { update, subscribe } = writable({
        new_article_modal_is_open: false,
        new_article_title: '',
        new_article_description: '',
        new_article_content: ''
    });
    const closeNewArticleMenu = () => update((store) => ({ ...store, new_article_modal_is_open: false }));
    const openNewArticleMenu = () => {
        console.log('click to open');
        update((store) => ({ ...store, new_article_modal_is_open: true }));
    };
    // const createNewCatalog = () => {
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
    return {
        subscribe,
        update,
        closeNewArticleMenu,
        openNewArticleMenu,
        onChangeNewArticleTitle,
        onChangeNewArticleDescription,
        onChangeNewArticleContent
    };
};
export const newArticleStore = createStore();
//# sourceMappingURL=NewArticle.store.js.map