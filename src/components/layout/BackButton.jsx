import React from "react";
import { Link } from "gatsby";

const BackButton = ({ href }) => {
	return (
		<Link to={`${href}`} className="mt-0 justify-self-start">
			<h4>Back</h4>
		</Link>
	);
};

export default BackButton;
