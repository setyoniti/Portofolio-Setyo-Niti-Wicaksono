import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';



export default defineConfig({
    plugins: [react()],
    base: './',
    server: {
        host: 'localhost',
        port: 5173 // ubah dari 3000 ke 5173 (default Vite)
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), 
        },
    },
});