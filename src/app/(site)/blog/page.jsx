import React from "react";
import BlogRoll from "../../../components/blog/BlogRoll";
import { getBlogPosts } from "../../../lib/content";

export default function BlogIndexPage() {
	return (
		<section className="contents">
			<BlogRoll posts={getBlogPosts()} />
		</section>
	);
}
