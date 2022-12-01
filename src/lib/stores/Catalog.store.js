import { writable } from 'svelte/store';
export const selectedCatalog = writable('');
const createStore = () => {
    const { update, subscribe } = writable({
        catalogs: []
    });
    const updateCatalog = (catalogs) => {
        update((store) => ({ ...store, catalogs }));
    };
    const insertCatalog = (catalog) => {
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
//# sourceMappingURL=Catalog.store.js.map