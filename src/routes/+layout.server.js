import { redirect } from '@sveltejs/kit';
export const load = ({ url }) => {
    console.log(url.href === `${url.origin}/`);
    if (url.href === `${url.origin}/`) {
        throw redirect(307, '/catalog');
    }
};
//# sourceMappingURL=+layout.server.js.map