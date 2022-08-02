import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PropTypes } from "prop-types";
import React from "react";

function SpotlightBlog({ post }) {
	return (
		<Link to={`/blog/${post.slug}`} className="contents">
			<div className="group mx-2 flex flex-col items-center gap-y-8 rounded-xl bg-slate-300 p-8 shadow-md hover:cursor-pointer dark:bg-gray-700 lg:flex-row lg:gap-x-12 lg:p-12">
				<div className="flex max-h-96 max-w-prose skew-y-3 flex-col items-center bg-blue dark:bg-red lg:shrink-0">
					<div className="prose prose-sm max-h-96 max-w-prose translate-x-1 -translate-y-1 overflow-hidden bg-white p-4 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 lg:shrink-0">
						<MDXRenderer>{post.body}</MDXRenderer>
					</div>
				</div>
				<div className="flex h-full flex-col gap-y-4">
					<h1 className="text-2xl font-bold">{post.frontmatter.title}</h1>
					<p className="hidden md:inline">{post.frontmatter.description}</p>
					<p className="hidden self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red md:inline">
						Keep Reading <span>&rarr;</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

SpotlightBlog.propTypes = {
	post: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string,
			templateKey: PropTypes.string,
			date: PropTypes.string,
			featuredPost: PropTypes.bool,
			description: PropTypes.string,
			featuredimage: PropTypes.string,
			tags: PropTypes.arrayOf(PropTypes.string),
		}),
		timeToRead: PropTypes.number,
		id: PropTypes.string,
		body: PropTypes.string,
		slug: PropTypes.string,
	}).isRequired,
};

export default SpotlightBlog;
