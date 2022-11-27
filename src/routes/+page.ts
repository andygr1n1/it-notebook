// // since there's no dynamic data here, we can prerender
// // it so that it gets served as a static asset in production
// export const prerender = true;

// import { catalogStore, type ICatalog } from '$lib/stores/Catalog.store';
// import { getXataClient } from '../xata';
// import type { PageLoad } from './$types';

// export const load: PageLoad = async (/* { params } */) => {
// 	const xata = getXataClient();

// 	try {
// 		const records: ICatalog[] | undefined = await xata.db.catalog.getAll();

// 		console.log('records', records);
// 		records && catalogStore.updateCatalog(records);

// 		return {
// 			status: 200,
// 			props: {
// 				records
// 			}
// 		};
// 	} catch (e) {
// 		alert(e);
// 		return;
// 	}
// };

export {};
