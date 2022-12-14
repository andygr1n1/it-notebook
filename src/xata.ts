// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from '@xata.io/client';
import type { BaseClientOptions, SchemaInference, XataRecord } from '@xata.io/client';

const tables = [{ name: 'catalog', columns: [{ name: 'title', type: 'string' }] }] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Catalog = InferredTypes['catalog'];
export type CatalogRecord = Catalog & XataRecord;

export type DatabaseSchema = {
	catalog: CatalogRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
	databaseURL: 'https://Andrew-s-workspace-c59hq8.us-east-1.xata.sh/db/it-notebook-db',
	enableBrowser: true,
	apiKey: 'xau_yn1BPmHn58t59y0gw6IwSqFMg4XzKCY9'
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
	constructor(options?: BaseClientOptions) {
		super({ ...defaultOptions, ...options }, tables);
	}
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
	if (instance) return instance;

	instance = new XataClient();
	return instance;
};
