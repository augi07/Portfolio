/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#4aa5a4',
				'secondary': '#2f496a',
				'accent': '#3c4d86',
				'background': '#04100f',
				'text': '#e9f7f7',
			}
		},
		fontFamily: {
			'RobotoMono': 'Roboto Mono, monospace',
			'CourierNew': 'Courier, monospace'
		}
	},
	plugins: [],
}
