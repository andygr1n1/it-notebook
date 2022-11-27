import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { normalizePath } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	root: normalizePath(path.resolve('./'))
};

export default config;
