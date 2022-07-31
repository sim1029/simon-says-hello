import { withPrefix } from "gatsby";
import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../utils/SiteMetadata";
import Footer from "./Footer";
import Navbar from "./Navbar";

function TemplateWrapper({ children }) {
	const { title, description } = useSiteMetadata();
	const [theme, setTheme] = useState(null);

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
		<div className="flex min-h-screen min-w-full flex-col justify-between bg-slate-200 p-4 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200">
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix("/")}img/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix("/")}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix("/")}img/og-image.jpg`}
				/>
			</Helmet>
			<Navbar themeToggle={toggleDarkMode} />
			{children}
			<Footer theme={theme} />
		</div>
	);
}

TemplateWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
