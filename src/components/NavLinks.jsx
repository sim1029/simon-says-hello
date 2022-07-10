import { Link } from "gatsby";
import React from "react";

function NavLinks({ navPages, linkStyles }) {
	return navPages.map(([title, url]) => (
		<li key={title}>
			<Link to={url} className={linkStyles}>
				{title}
			</Link>
		</li>
	));
}

export default NavLinks;
