/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);
const plugins = [];

export default defineConfig({
    plugins: [react(), ...plugins],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Build',
            fileName: 'build',
        },
        rollupOptions: {
            external: isExternal,
            output: {
                globals: {
                    react: 'React',
                },
            },
        },
    },
});
