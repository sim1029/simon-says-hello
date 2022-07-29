import React from "react";
import BlogRoll from "../../components/blog/BlogRoll";
import Layout from "../../components/layout/Layout";

function BlogIndexPage() {
	return (
		<Layout>
			<section>
				<BlogRoll />
			</section>
		</Layout>
	);
}

export default BlogIndexPage;
