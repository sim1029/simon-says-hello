"use client";

import React, { useEffect, useState } from "react";
import { ColorModeProvider } from "../../context/useColorMode";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ThemeShell({ children }) {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark") ? "dark" : "light",
		);
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
				<Navbar themeToggle={toggleDarkMode} />
				{children}
				<Footer />
			</div>
		</ColorModeProvider>
	);
}

export default ThemeShell;
