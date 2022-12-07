import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const createStore = () => {
	const { update, subscribe } = writable({
		is_user_menu_open: false,
		user_name: '',
		user_id: ''
	});

	const closeUserMenu = () => update((store) => ({ ...store, is_user_menu_open: false }));
	const openUserMenu = () => update((store) => ({ ...store, is_user_menu_open: true }));
	const createUser = () => {
		update((store) => {
			return { ...store, is_user_menu_open: false, user_id: uuidv4() };
		});
		closeUserMenu();
	};
	const onChangeUserName = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) =>
		update((store) => ({
			...store,
			user_name: (e.target as HTMLInputElement)?.value ?? ''
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
