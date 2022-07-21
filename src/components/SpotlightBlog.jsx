import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";

function SpotlightBlog({ edge }) {
	return (
		<Link to={edge.node.fields.slug} className="contents">
			<div className="group flex flex-col items-center gap-y-8 rounded-xl bg-slate-300 p-8 shadow-md hover:cursor-pointer dark:bg-gray-700 lg:flex-row lg:gap-x-12 lg:p-12">
				<div className="flex max-h-96 max-w-prose skew-y-3 flex-col items-center bg-blue dark:bg-red lg:shrink-0">
					<div
						className="prose prose-sm prose-slate max-h-96 max-w-prose translate-x-1 -translate-y-1 overflow-hidden bg-white p-4 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 lg:shrink-0"
						dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
					/>
				</div>
				<div className="flex max-w-xl flex-col gap-y-4">
					<h1 className="text-2xl font-bold">{edge.node.frontmatter.title}</h1>
					<p className="hidden md:inline">
						{edge.node.frontmatter.description}
					</p>
					<p className="hidden self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red md:inline">
						Keep Reading <span>&rarr;</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

SpotlightBlog.propTypes = {
	edge: PropTypes.shape({
		node: PropTypes.shape({
			id: PropTypes.string,
			excerpt: PropTypes.string,
			fields: PropTypes.shape({
				slug: PropTypes.string,
			}),
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
				templateKey: PropTypes.string,
				date: PropTypes.string,
				featuredPost: PropTypes.bool,
				description: PropTypes.string,
				featuredimage: PropTypes.shape({
					childImageSharp: PropTypes.shape({
						gatsbyImageData: PropTypes.shape({
							width: PropTypes.number,
							height: PropTypes.number,
						}),
					}),
				}),
			}),
			timeToRead: PropTypes.number.isRequired,
		}),
	}).isRequired,
};

export default SpotlightBlog;
