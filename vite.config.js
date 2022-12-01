import { sveltekit } from '@sveltejs/kit/vite';
import { normalizePath } from 'vite';
import path from 'path';
const config = {
    plugins: [sveltekit()],
    root: normalizePath(path.resolve('./'))
};
export default config;
//# sourceMappingURL=vite.config.js.map