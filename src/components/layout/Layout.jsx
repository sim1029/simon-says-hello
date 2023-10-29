import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ColorModeProvider } from "../../context/useColorMode";
import useSiteMetadata from "../../utils/SiteMetadata";
import Footer from "./Footer";
import Navbar from "./Navbar";

function TemplateWrapper({ children }) {
	const { title, description } = useSiteMetadata();
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		if (theme === "dark") {
			localStorage.theme = "light";
			setTheme("light");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.theme = "dark";
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	};

	return (
		<ColorModeProvider value={theme}>
			<div className="min-w-screen flex min-h-screen flex-col justify-between bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200">
				<Helmet>
					<html lang="en" />
					<title>{title}</title>
					<meta name="description" content={description} />

					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
				</Helmet>
				<Navbar themeToggle={toggleDarkMode} />
				{children}
				<Footer />
			</div>
		</ColorModeProvider>
	);
}

export default TemplateWrapper;
