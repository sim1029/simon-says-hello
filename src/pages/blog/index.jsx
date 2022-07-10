import React from "react";
import BlogRoll from "../../components/BlogRoll";
import Layout from "../../components/Layout";

function BlogIndexPage() {
	return (
		<Layout>
			<div className="min-h-screen bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200">
				<section>
					<BlogRoll />
				</section>
			</div>
		</Layout>
	);
}

export default BlogIndexPage;
