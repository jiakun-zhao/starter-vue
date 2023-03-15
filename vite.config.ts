import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import JsDelivr from 'vite-plugin-jsdelivr'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    plugins: [
        Vue(),
        JsDelivr(),
        UnoCSS(),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
