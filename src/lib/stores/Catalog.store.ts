import { writable, type Writable } from 'svelte/store';

export const selectedCatalog: Writable<string> = writable('');

const createStore = () => {
	const { update, subscribe } = writable({
		catalogs: <ICatalog[]>[]
	});

	const updateCatalog = (catalogs: ICatalog[]) => {
		update((store) => ({ ...store, catalogs }));
	};
	const insertCatalog = (catalog: ICatalog) => {
		update((store) => {
			store.catalogs.push(catalog);

			return store;
		});
	};

	return {
		subscribe,
		update,
		updateCatalog,
		insertCatalog
	};
};

export const catalogStore = createStore();

export interface ICatalog {
	id: string;
	title: string | null | undefined;
	is_active_route?: false;
}
