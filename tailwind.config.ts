import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'deep-blue': '#212859',
			'off-white': '#D5CDB3',
			'very-deep-blue': '#151A3D',
			'blush-pink': '#F08CAE',
		},
	},
	plugins: [],
}
export default config
