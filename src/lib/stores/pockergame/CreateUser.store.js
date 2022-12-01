import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
const createStore = () => {
    const { update, subscribe } = writable({
        is_catalog_open: false,
        user_name: '',
        user_id: ''
    });
    const closeUserMenu = () => update((store) => ({ ...store, is_catalog_open: false }));
    const openUserMenu = () => update((store) => ({ ...store, is_catalog_open: true }));
    const createUser = () => {
        update((store) => {
            return { ...store, is_catalog_open: false, user_id: uuidv4() };
        });
        closeUserMenu();
    };
    const onChangeUserName = (e) => update((store) => ({
        ...store,
        user_name: e.target?.value ?? ''
    }));
    return {
        subscribe,
        update,
        closeUserMenu,
        openUserMenu,
        createUser,
        onChangeUserName
    };
};
export const pokerUserStore = createStore();
//# sourceMappingURL=CreateUser.store.js.map