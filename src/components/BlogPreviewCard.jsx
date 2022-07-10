import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

function BlogPreviewCard({ post }) {
	return (
		<div className="mb-8 h-[250px] flex-none rounded-xl border-2 border-slate-300 bg-slate-300 shadow-md transition-transform duration-200 ease-out hover:translate-x-3 hover:-translate-y-3 hover:border-blue dark:bg-gray-700 dark:hover:border-red lg:w-1/2">
			<Link to={post.fields.slug} className="content">
				<article className="flex">
					<header className="shrink-0">
						{post.frontmatter.featuredimage ? (
							<PreviewCompatibleImage
								imageInfo={{
									image: post.frontmatter.featuredimage,
									alt: `featured image thumbnail for post ${post.frontmatter.title}`,
									width:
										post.frontmatter.featuredimage.childImageSharp
											.gatsbyImageData.width,
									height:
										post.frontmatter.featuredimage.childImageSharp
											.gatsbyImageData.height,
								}}
								imageStyle="rounded-l-lg"
							/>
						) : null}
					</header>
					<div className="group flex flex-col justify-evenly p-4 ">
						<h1 className="text-lg font-bold">{post.frontmatter.title}</h1>
						<div className="flex justify-between text-sm text-gray-600 dark:text-slate-400">
							<p className="">{post.frontmatter.date}</p>
							<div className="flex space-x-4">
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
						</div>
						<div className="flex justify-between">
							<ul className="flex space-x-2">
								<li>Tag 1</li>
								<li>Tag 2</li>
								<li>Tag 3</li>
							</ul>
							<p className="underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red ">
								Keep Reading <span>&rarr;</span>
							</p>
						</div>
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
