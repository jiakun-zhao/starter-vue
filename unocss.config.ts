import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno({
            dark: 'media',
            preflight: false,
        }),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            extraProperties: { 'display': 'inline-block', 'vertical-align': 'bottom' },
        }),
    ],
    theme: {
        colors: {
            primary: '#767676',
        },
    },
})
