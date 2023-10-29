import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ViewEye from "../../images/views.png";
import ViewEyeDark from "../../images/view-dark.png";
import { useColorMode } from "../../context/useColorMode";

function SpotlightBlog({ post }) {
	const theme = useColorMode();
	const viewIcon = theme === "dark" ? ViewEyeDark : ViewEye;

	return (
		<Link
			to={`/blog/${post.slug}`}
			className="group mx-2 flex flex-col items-center gap-y-8 rounded-xl bg-slate-300 p-8 shadow-md hover:cursor-pointer dark:bg-gray-700"
		>
			<div className="flex items-center space-x-2 self-end text-sm text-gray-600 dark:text-slate-400">
				<img className="h-4 w-4" src={viewIcon} alt="eye" />
				<p>{post.views}</p>
			</div>
			<div className="flex max-h-96 max-w-prose skew-y-3 flex-col items-center bg-blue dark:bg-red lg:shrink-0">
				<div className="prose prose-sm max-h-96 max-w-prose -translate-y-1 translate-x-1 overflow-hidden bg-white p-4 transition-transform duration-200 ease-out group-hover:-translate-y-3 group-hover:translate-x-3 lg:shrink-0">
					<MDXRenderer>{post.body}</MDXRenderer>
				</div>
			</div>
			<div className="flex h-full flex-col">
				<h1 className="text-2xl font-bold">{post.frontmatter.title}</h1>
				<p className="hidden md:inline">{post.frontmatter.description}</p>
				<div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-slate-400">
					{post.frontmatter.date}
					<p>{post.timeToRead} Min</p>
				</div>
				<p className="mt-4 hidden self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red md:inline">
					Keep Reading <span>&rarr;</span>
				</p>
			</div>
		</Link>
	);
}

export default SpotlightBlog;
