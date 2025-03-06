import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		port: parseInt(process.env.PORT || '3000')
	}
});
