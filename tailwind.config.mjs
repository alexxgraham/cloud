export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'accent': '#6366f1',
				'accent-dark': '#3730a3',
				'accent-light': '#818cf8',
				'link': '#0A66C2',
				'link-dark': '#02447B',
			},
			fontFamily: {
				'newsreader': ['Newsreader', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'victor': ['Victor Mono', 'monospace'],
				'sans': ['Public Sans', 'sans-serif'],
			},
			fontSize: {
				'xxs': '0.625rem'
			}
		},
	},
	plugins: [],
}
