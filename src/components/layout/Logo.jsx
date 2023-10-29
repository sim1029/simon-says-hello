import { Link } from "gatsby";
import React from "react";
import logo from "../../images/icon.png";

const Logo = ({ imgStyles, children }) => {
	return (
		<Link to="/" className="flex items-center space-x-4">
			<img src={logo} alt="logo" className={imgStyles} />
			{children}
		</Link>
	);
};

export default Logo;
