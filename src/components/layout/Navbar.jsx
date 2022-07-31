import { PropTypes } from "prop-types";
import React, { useState } from "react";
import CrossButton from "./CrossButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ToggleSlider from "./ToggleSlider";

const navPages = [
	["Projects", "/projects"],
	["Skills", "/skills"],
	["Blog", "/blog"],
];

const navPagesStyle =
	"text-3xl decoration-blue decoration-2 underline-offset-4 hover:underline dark:decoration-red lg:text-xl";

function Navbar({ themeToggle }) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center justify-between bg-slate-200 px-8 py-8 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200 lg:justify-around lg:py-10">
			<Logo imgStyles="h-10 w-10">
				<h1 className="hidden text-xl font-bold sm:inline">Simon-Says-Hello</h1>
			</Logo>
			<nav>
				<section className="flex lg:hidden">
					<button
						className="cursor-pointer space-y-2"
						onClick={() => setIsNavOpen((prev) => !prev)}
						type="button"
					>
						<span className="block h-1 w-10 bg-gray-800 dark:bg-slate-200" />
						<span className="block h-1 w-10 bg-gray-800 dark:bg-slate-200" />
						<span className="block h-1 w-10 bg-gray-800 dark:bg-slate-200" />
					</button>
					<div
						className={
							isNavOpen
								? "fixed top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-evenly overflow-hidden bg-slate-200 dark:bg-gray-800"
								: "hidden"
						}
					>
						<button
							className="absolute top-0 right-0 cursor-pointer px-8 py-8"
							onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
							type="button"
						>
							<CrossButton />
						</button>
						<div className="absolute top-0 left-0 flex space-x-8 px-8 py-8">
							<ToggleSlider onClick={themeToggle} />
							<Logo imgStyles="w-10 h-10" />
						</div>
						<ul className="mx-10 flex min-h-[250px] flex-col justify-between">
							<NavLinks navPages={navPages} linkStyles={navPagesStyle} />
						</ul>
					</div>
				</section>
				<div className="hidden space-x-8 lg:flex">
					<ul className="hidden sm:space-x-8 lg:flex lg:space-x-16">
						<NavLinks navPages={navPages} linkStyles={navPagesStyle} />
					</ul>
					<ToggleSlider onClick={themeToggle} />
				</div>
			</nav>
		</div>
	);
}

Navbar.propTypes = {
	themeToggle: PropTypes.func.isRequired,
};

export default Navbar;
