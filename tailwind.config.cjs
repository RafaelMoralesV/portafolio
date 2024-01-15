/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				"catppuccin-mocha": {
					primary: "#89b4fa", // blue
					secondary: "#f5c2e7", // pink
					accent: "#94e2d5", // teal
					neutral: "#11111b", // crust
					"base-100": "#1e1e2e", // base
					info: "#74c7ec", // sapphire
					success: "#a6e3a1", // green
					warning: "#f9e2af", // yellow
					error: "#f38ba8", // red
				},
			}, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		],
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	},
};
