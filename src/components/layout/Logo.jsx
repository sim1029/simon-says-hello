import Link from "next/link";
import React from "react";
import logo from "../../images/icon.png";

const Logo = ({ imgStyles, children }) => {
	return (
		<Link href="/" className="flex items-center space-x-4">
			<img src={logo.src} alt="logo" className={imgStyles} />
			{children}
		</Link>
	);
};

export default Logo;
