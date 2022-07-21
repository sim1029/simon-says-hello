import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

function BlogPreviewCard({ post }) {
	const image = getImage(post.frontmatter.featuredimage);
	return (
		<div className="group mb-8 flex h-[225px] w-[500px] rounded-xl border-2 border-slate-300 bg-slate-300 shadow-md transition-transform duration-200 ease-out hover:translate-x-3 hover:-translate-y-3 hover:border-blue dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red md:mr-8">
			<Link to={post.fields.slug} className="contents">
				<article className="contents">
					{post.frontmatter.featuredimage ? (
						<GatsbyImage
							className="rounded-l-xl sm:shrink-0"
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
							{post.frontmatter.tags.map((tag) => (
								<li className="font-bold underline decoration-blue decoration-solid decoration-[3px] underline-offset-2 dark:border-red dark:decoration-red">
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
		id: PropTypes.string,
		excerpt: PropTypes.string,
		fields: PropTypes.shape({
			slug: PropTypes.string,
		}),
		frontmatter: PropTypes.shape({
			title: PropTypes.string,
			templateKey: PropTypes.string,
			tags: PropTypes.arrayOf(PropTypes.string),
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
	}).isRequired,
};

export default BlogPreviewCard;
