import React from "react";
import { useColorMode } from "../../context/useColorMode";
import logo from "../../images/logo.png";
import githubLogoDark from "../../images/social/github-icon-dark.svg";
import githubLogo from "../../images/social/github-icon.svg";
import twitterDark from "../../images/social/twitter-dark.png";
import twitterLight from "../../images/social/twitter-light.png";
import linkedinDark from "../../images/social/linkedin-dark.png";
import linkedinLight from "../../images/social/linkedin-light.png";
import mediumLight from "../../images/social/medium-light.png";
import mediumDark from "../../images/social/medium-dark.png";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
	const theme = useColorMode();
	const github = theme === "dark" ? githubLogoDark : githubLogo;
	const twitter = theme === "dark" ? twitterDark : twitterLight;
	const linkedin = theme === "dark" ? linkedinDark : linkedinLight;
	const medium = theme === "dark" ? mediumDark : mediumLight;

	const socialsLinks = [
		{ alt: "GitHub", src: github, url: "https://github.com/sim1029" },
		{
			alt: "Linkedin",
			src: linkedin,
			url: "https://www.linkedin.com/in/simonsayshello",
		},
		{
			alt: "Twitter",
			src: twitter,
			url: "https://twitter.com/_SimonSchueller",
		},
		{ alt: "Medium", src: medium, url: "https://medium.com/@1029simdog" },
	];

	const navPages = [
		["Projects", "/projects"],
		["Skills", "/skills"],
		["Blog", "/blog"],
	];

	const contact = [["Message", "/#contacts"]];

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
				<ul className="flex flex-col items-center space-y-4">
					<li className="mb-2 text-3xl font-bold text-gray-900 dark:text-slate-100">
						Socials
					</li>
					<div className="flex space-x-8">
						<SocialLinks imgStyle="w-10" socialsLinks={socialsLinks} />
					</div>
				</ul>
			</div>

			<p className="mb-4 mt-8 self-center lg:mt-12">
				© {new Date().getFullYear()} Simon Schueller
			</p>
		</footer>
	);
}

export default Footer;
