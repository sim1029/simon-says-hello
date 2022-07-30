/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				red: {
					DEFAULT: "#E94560",
					dark: "#CF3030",
				},
				blue: {
					DEFAULT: "#3282B8",
					dark: "#2666CF",
				},
			},
			textDecorationThickness: {
				2: "6px",
			},
			typography: {
				sm: {
					css: {
						fontSize: "0.45rem",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
};
