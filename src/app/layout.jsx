import React from "react";
import "../styles/global.css";

export const metadata = {
	title: "Simon Says Hello",
	description:
		"Portfolio website and software engineering blog of Simon Schueller",
	manifest: "/manifest.webmanifest",
};

export const viewport = {
	themeColor: "#E94560",
};

// Apply the saved color scheme before first paint to avoid a flash
const themeInitScript = `(function(){try{var t=localStorage.theme;if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
