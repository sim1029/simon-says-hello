import React from "react";

const PageHeader = ({ pageInfo }) => {
	return (
		<div className="mx-4 mb-20 space-y-6 rounded-xl bg-slate-300 p-8 text-center dark:bg-gray-700 sm:w-2/3 xl:w-1/2">
			<h1 className="text-2xl font-bold sm:text-4xl">{pageInfo.title}</h1>
			<p className="text-lg">{pageInfo.description}</p>
		</div>
	);
};

export default PageHeader;
