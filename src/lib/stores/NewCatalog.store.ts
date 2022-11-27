import { createCatalogMutation } from '$lib/xata-api/mutations/CreateCatalog.mutation';
import { writable } from 'svelte/store';

const createStore = () => {
	const { update, subscribe } = writable({
		is_catalog_open: false,
		new_catalog_title: ''
	});

	const closeNewCatalog = () => update((store) => ({ ...store, is_catalog_open: false }));
	const openNewCatalog = () => update((store) => ({ ...store, is_catalog_open: true }));
	const createNewCatalog = () => {
		update((store) => {
			createCatalogMutation(store.new_catalog_title);
			return { ...store, is_catalog_open: false, new_catalog_title: '' };
		});
		closeNewCatalog();
	};
	const onChangeNewCatalogTitle = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) =>
		update((store) => ({
			...store,
			new_catalog_title: (e.target as HTMLInputElement)?.value ?? ''
		}));

	return {
		subscribe,
		update,
		closeNewCatalog,
		openNewCatalog,
		createNewCatalog,
		onChangeNewCatalogTitle
	};
};

export const newCatalogStore = createStore();
