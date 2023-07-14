import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			strategies: 'network-first',
			manifest: {
				name: 'Clon Flix',
				short_name: 'Clon Flix',
				start_url: '/',
				description: 'App de Info de Peliculas y Series',
				display: 'standalone',
				background_color: '#000',
				theme_color: '#000',
				lang: 'es',
				scope: '/',
				icons: [
					{
						src: '/logoManifest.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
})
