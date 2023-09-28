import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'main-violet': '#483A58',
			'off-white': '#EDEAE8',
			'deep-violet': '#32283E',
			'blush-violet': '#A288E3',
		},
	},
	plugins: [],
}
export default config
