// Generated with CLI
import { catalogStore } from '$lib/stores/Catalog.store';
import { getXataClient } from '../../../xata';
const xata = getXataClient();

export const createCatalogMutation = async (catalog_title: string) => {
	const record = await xata.db.catalog.create({
		title: catalog_title
	});
	console.log(record);

	catalogStore.insertCatalog({ id: record.id, title: record.title });
};
