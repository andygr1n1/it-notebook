import { getXataClient } from '../../xata';
export const load = async ({ params }) => {
    const xata = getXataClient();
    try {
        const records = await xata.db.catalog.getAll();
        return {
            status: 200,
            props: {
                records,
                params
            }
        };
    }
    catch (e) {
        alert(e);
        return;
    }
};
//# sourceMappingURL=+layout.server.js.map