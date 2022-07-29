/* eslint-disable react/no-array-index-key */
import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

function BlogPreviewCard({ post }) {
	const image = getImage(post.frontmatter.hero_image);
	return (
		<div className="group mb-8 flex h-[225px] w-[500px] rounded-xl border-2 border-slate-300 bg-slate-300 shadow-md transition-transform duration-200 ease-out hover:translate-x-3 hover:-translate-y-3 hover:border-blue dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red md:mr-8">
			<Link to={`/blog/${post.slug}`} className="contents">
				<article className="contents">
					{post.frontmatter.hero_image ? (
						<GatsbyImage
							className="hidden rounded-l-xl sm:shrink-0 md:inline"
							image={image}
							alt={post.frontmatter.title}
						/>
					) : null}
					<div className="flex w-full flex-col justify-evenly px-4">
						<h1 className="text-lg font-bold">
							{post.frontmatter.title.length > 30
								? `${post.frontmatter.title.slice(0, 30)}...`
								: post.frontmatter.title}
						</h1>
						<p className="text-sm text-gray-600 dark:text-slate-400">
							{post.frontmatter.date}
						</p>
						<div className="flex space-x-4 text-sm text-gray-600 dark:text-slate-400">
							<p className="flex items-center">
								<BsFillEyeFill className="mr-1 " />
								69
							</p>
							<p className="flex items-center">
								<BsHeartFill className="mr-1 fill-red" />
								69
							</p>
							<p>{post.timeToRead} Min</p>
						</div>
						<ul className="flex space-x-4 text-sm">
							{post.frontmatter.tags.map((tag, index) => (
								<li
									key={index}
									className="font-bold underline decoration-blue decoration-solid decoration-[3px] underline-offset-2 dark:border-red dark:decoration-red"
								>
									{tag}
								</li>
							))}
						</ul>
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
