/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
	extend: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		colors: {
			caramel: {
				caramel: '#C58C4F',
				light: '#E2B98C',
				dark: '#9C6E3F',
			},
			white: {
				seashell: '#FFF9F3',
				ghost: '#F8F8FF',
			},
			cadetGray: '#9DA5B1',
		},
	},
};
export const variants = {
};
export const plugins = [];
