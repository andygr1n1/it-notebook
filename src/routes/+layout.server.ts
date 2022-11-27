import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	console.log(url.href === `${url.origin}/`);
	if (url.href === `${url.origin}/`) {
		throw redirect(307, '/catalog');
	}
};
