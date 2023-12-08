/** @type {import("rippleui").Config} */
const themeConfig = {
	themes: [
		{
			themeName: "light",
			colorScheme: "light",
			colors: {
				primary: "#1C4E64",
				secondary: "#EE7046",
			},
		},
		{
			themeName: "dark",
			colorScheme: "dark",
			colors: {
				primary: "#1C4E64",
				secondary: "#EE7046",
			},
		},
	],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("rippleui")({
			...themeConfig,
		}),
	],
};
