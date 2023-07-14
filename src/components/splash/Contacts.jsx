import React from "react";
import ContactModal from "./ContactModal";

const Contacts = () => {
	return (
		<div className="flex flex-col items-center space-y-8 font-black">
			<div className="flex flex-col space-x-4 text-4xl md:text-6xl lg:flex-row">
				<h1 className="text-center">💜 Stay in Touch</h1>
			</div>
			<p className="w-2/3 text-center text-lg font-normal text-gray-700 dark:text-slate-300 md:text-xl">
				{
					"Message me what's on your mind or get new blog posts sent to your email below"
				}
			</p>
			<div
				id="contacts"
				className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8"
			>
				<ContactModal />
			</div>
		</div>
	);
};

export default Contacts;
