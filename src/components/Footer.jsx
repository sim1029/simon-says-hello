import { PropTypes } from "prop-types";
import React from "react";
import logo from "../img/logo.png";
import githubLogoDark from "../img/social/github-icon-dark.svg";
import githubLogo from "../img/social/github-icon.svg";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Footer({ theme }) {
	const github = theme === "dark" ? githubLogoDark : githubLogo;

	const socialsLinks = [
		{ alt: "GitHub", src: github, url: "https://github.com/sim1029" },
		{ alt: "GitHub1", src: github, url: "https://github.com/sim1029" },
		{ alt: "GitHub2", src: github, url: "https://github.com/sim1029" },
		{ alt: "GitHub3", src: github, url: "https://github.com/sim1029" },
	];

	const navPages = [
		["Projects", "/projects"],
		["Skills", "/skills"],
		["Blog", "/blog"],
	];

	const contact = [
		["Message", "/"],
		["Newsletter", "/"],
	];

	const linksStyle =
		"text-xl lg:text-lg decoration-blue decoration-2 underline-offset-4 hover:underline dark:decoration-red dark:text-slate-300 text-gray-600 text-center";

	return (
		<footer className="flex w-full flex-col bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200">
			<hr className="my-12 h-[7px] w-10/12 self-center rounded-full bg-gray-800 dark:bg-slate-200" />
			<div className="mb-8 flex justify-evenly lg:hidden">
				<div className="flex flex-col items-center space-y-16">
					<Logo imgStyles="h-14 w-14" />
					<ul className="flex flex-col items-center space-y-4">
						<li className="text-3xl font-bold">Socials</li>
						<SocialLinks imgStyle="w-10" socialsLinks={socialsLinks} />
					</ul>
				</div>
				<div className="flex flex-col space-y-8 text-center">
					<ul className="space-y-4">
						<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
							Pages
						</li>
						<NavLinks
							className="space-y-2"
							linkStyles={linksStyle}
							navPages={navPages}
						/>
					</ul>
					<ul className="space-y-4">
						<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
							Contact
						</li>
						<NavLinks linkStyles={linksStyle} navPages={contact} />
					</ul>
				</div>
			</div>

			<div className="mb-8 hidden justify-evenly text-center lg:flex">
				<a href="/">
					<img src={logo} alt="logo" className="h-20 w-20" />
				</a>
				<ul className="space-y-4">
					<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
						Pages
					</li>
					<NavLinks linkStyles={linksStyle} navPages={navPages} />
				</ul>
				<ul className="space-y-4">
					<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
						Contact
					</li>
					<NavLinks linkStyles={linksStyle} navPages={contact} />
				</ul>
				<ul className="flex flex-col items-center space-y-4">
					<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
						Socials
					</li>
					<div className="flex space-x-8">
						<SocialLinks imgStyle="w-10" socialsLinks={socialsLinks} />
					</div>
				</ul>
			</div>

			<p className="mt-8 mb-4 self-center lg:mt-12">© 2022 Simon Schueller</p>
		</footer>
	);
}

Footer.propTypes = {
	theme: PropTypes.string,
};

Footer.defaultProps = {
	theme: "light",
};

export default Footer;
