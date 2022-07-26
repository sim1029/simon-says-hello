import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import logo from "../img/logo.png";

const Logo = ({ imgStyles, children }) => {
	return (
		<Link to="/" className="flex items-center space-x-4">
			<img src={logo} alt="logo" className={imgStyles} />
			{children}
		</Link>
	);
};

Logo.propTypes = {
	imgStyles: PropTypes.string.isRequired,
	children: PropTypes.node,
};

Logo.defaultProps = {
	children: null,
};

export default Logo;
