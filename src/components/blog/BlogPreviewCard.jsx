// @ts-nocheck
/* eslint-disable react/no-array-index-key */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

function BlogPreviewCard({ post }) {
	const image = getImage(post.frontmatter.hero_image);
	return (
		<div className="group flex w-full flex-col items-center overflow-x-hidden rounded-xl border-4 border-slate-300 bg-slate-300 px-4 shadow-md transition-transform duration-200 ease-out hover:border-blue dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red">
			<Link to={`/blog/${post.slug}`} className="contents">
				<article className="contents">
					<div className="my-4 flex flex-col justify-center">
						{post.frontmatter.hero_image ? (
							<GatsbyImage
								className=""
								image={image}
								alt={post.frontmatter.title}
							/>
						) : null}
					</div>
					<div className="flex w-full flex-col">
						<h1 className="mt-4 text-lg font-bold">
							{post.frontmatter.title.length > 30
								? `${post.frontmatter.title.slice(0, 30)}...`
								: post.frontmatter.title}
						</h1>
						<div className="flex justify-between text-sm text-gray-600 dark:text-slate-400">
							{post.frontmatter.date}
							<p>{post.timeToRead} Min</p>
						</div>
						{post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
							<div className="mb-2 mt-4 flex items-center gap-x-4 text-sm">
								<ul className="contents">
									{post.frontmatter.tags.map((tag, index) => (
										<li
											key={index}
											className="underline decoration-blue decoration-solid decoration-[3px] underline-offset-2 dark:border-red dark:decoration-red"
										>
											{tag}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</article>
			</Link>
		</div>
	);
}

BlogPreviewCard.propTypes = {
	post: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string,
			templateKey: PropTypes.string,
			date: PropTypes.string,
			featuredPost: PropTypes.bool,
			description: PropTypes.string,
			hero_image: PropTypes.shape({
				childImageSharp: PropTypes.shape({
					gatsbyImageData: PropTypes.string,
				}),
			}),
			tags: PropTypes.arrayOf(PropTypes.string),
		}),
		timeToRead: PropTypes.number,
		id: PropTypes.string,
		body: PropTypes.string,
		slug: PropTypes.string,
	}).isRequired,
};

export default BlogPreviewCard;
