import React from "react";
import dogImg from "../images/404-doggie.png";

function NotFoundPage() {
	return (
		<div className="min-w-screen flex min-h-screen flex-col items-center bg-[#FFE4EA] p-8">
			<h1 className="text-3xl font-bold md:text-4xl">404 Not Found</h1>
			<img src={dogImg} alt="Dog that ate my page" className="md:w-1/3" />
			<h1 className="text-2xl md:text-3xl">A Dog Ate this Page</h1>
			<p className="mt-2 md:w-3/5">
				Your dog is cute but honestly a menace. Where are my shoes? Where is my
				graduation certificate? Where is the chocolate cake I baked for my
				Aunt’s birthday? And why did you take your dog to the vet on that same
				Thursday?!
			</p>
		</div>
	);
}

export default NotFoundPage;
