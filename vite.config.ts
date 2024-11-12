/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@src': resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true, // para que no exiga la importacion
        environment: 'jsdom',
        setupFiles: './tests/setupTests.ts',
    },
});
