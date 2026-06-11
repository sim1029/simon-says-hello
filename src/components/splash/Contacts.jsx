import React from "react";

const Contacts = () => {
	return (
		<div className="flex flex-col items-center space-y-8 font-black">
			<div className="flex flex-col space-x-4 text-4xl md:text-6xl lg:flex-row">
				<h1 className="text-center">💜 Stay in Touch</h1>
			</div>
			<p className="w-2/3 text-center text-lg font-normal text-gray-700 dark:text-slate-300 md:text-xl">
				{"Message me what's on your mind"}
			</p>
			<div
				id="contacts"
				className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0"
			>
				<a
					href="mailto:simon.paul.schueller@gmail.com"
					className="w-32 border-[3px] border-blue bg-blue px-4 py-2 text-center font-bold text-slate-200 no-underline hover:border-blue-dark hover:bg-blue-dark dark:border-red dark:bg-red dark:hover:border-red-dark dark:hover:bg-red-dark"
				>
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Contacts;
