import type { ICatalog } from '$lib/stores/Catalog.store';
import { getXataClient } from '../../xata';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const xata = getXataClient();

	try {
		const records: ICatalog[] | undefined = await xata.db.catalog.getAll();

		return {
			status: 200,
			props: {
				records,
				params
			}
		};
	} catch (e) {
		alert(e);
		return;
	}
};
