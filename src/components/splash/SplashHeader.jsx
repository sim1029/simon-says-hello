import React, { useEffect, useState } from "react";

const SplashHeader = () => {
	const identities = [
		"Simon Schueller",
		"a developer",
		"a creator",
		"an entrepreneur",
	];
	const [currIdentity, setCurrIdentity] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (currIdentity >= identities.length - 1) {
				setCurrIdentity(() => 0);
			} else {
				setCurrIdentity((curr) => curr + 1);
			}
		}, 2000);
		return () => clearInterval(interval);
	}, [currIdentity, setCurrIdentity]);

	return (
		<div className="flex flex-col items-center space-y-8 font-black">
			<div className="flex flex-col space-x-4 text-4xl md:text-6xl lg:flex-row">
				<h1 className="text-center">👋 Hi, I&apos;m</h1>
				<h1 className="text-center text-red underline decoration-blue decoration-8 underline-offset-4 dark:text-blue dark:decoration-red">
					{identities[currIdentity]}
				</h1>
			</div>
			<p className="text-center text-lg font-normal text-gray-700 dark:text-slate-300 md:text-xl">
				Please explore this website to learn more about me and what I am
				passionate about
			</p>
			<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
				<a
					href="https://drive.google.com/file/d/1VAUhwVSr3MlpuYf8F8U39d8ym7RqFAf5/view?usp=sharing"
					type="button"
					target="_blank"
					className="w-24 border-[3px] border-solid border-gray-700 px-4 py-2 text-center font-bold no-underline hover:border-gray-900 hover:bg-slate-300 dark:border-slate-200 dark:hover:bg-gray-900"
					rel="noreferrer"
				>
					CV
				</a>
				<a
					href="https://github.com/sim1029"
					type="button"
					target="_blank"
					className="w-24 bg-blue px-4 py-2
                     text-center font-bold text-slate-200 no-underline hover:bg-blue-dark dark:bg-red dark:hover:bg-red-dark"
					rel="noreferrer"
				>
					Github
				</a>
			</div>
		</div>
	);
};

export default SplashHeader;
