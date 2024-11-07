/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test:{
        globals: true, 
        environment: "jsdom",
        setupFiles: "./tests/setupTests.ts", 
       
    },
});
