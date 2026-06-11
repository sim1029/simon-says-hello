import Link from "next/link";
import React from "react";

const BackButton = ({ href }) => {
	return (
		<Link href={`${href}`} className="mt-0 justify-self-start no-underline">
			<h4>&larr; Back</h4>
		</Link>
	);
};

export default BackButton;
