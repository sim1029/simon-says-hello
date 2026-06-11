import Link from "next/link";
import React from "react";

function NavLinks({ navPages, linkStyles }) {
	return navPages.map(([title, url]) => (
		<li key={title}>
			<Link href={url} className={linkStyles}>
				{title}
			</Link>
		</li>
	));
}

export default NavLinks;
