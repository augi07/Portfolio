/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#5ab5b4',
				'secondary': '#96afd0',
				'accent': '#7a8bc3',
				'background': '#f5fbfb',
				'text': '#040a09',
			}
		},
	},
	plugins: [],
}
