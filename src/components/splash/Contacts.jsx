import React from "react";

const Contacts = () => {
	return (
		<div className="flex flex-col items-center space-y-8 font-black">
			<div className="flex flex-col space-x-4 text-4xl md:text-6xl lg:flex-row">
				<h1 className="text-center">💜 Stay in Touch</h1>
			</div>
			<p className="w-2/3 text-center text-lg font-normal text-gray-700 dark:text-slate-300 md:text-xl">
				Sign up for my monthly newsletter and new blog post notifications below
			</p>
			<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
				<button
					type="button"
					className="w-32 border-[3px] border-solid border-gray-700 py-2 px-4 font-bold hover:border-gray-900 hover:bg-slate-300 dark:border-slate-200 dark:hover:bg-gray-900"
				>
					Feedback
				</button>
				<button
					type="button"
					className="w-32 bg-blue py-2 px-4 font-bold text-slate-200 hover:bg-blue-dark dark:bg-red dark:hover:bg-red-dark "
				>
					Newsletter
				</button>
			</div>
		</div>
	);
};

export default Contacts;
