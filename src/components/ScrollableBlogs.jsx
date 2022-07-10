import { PropTypes } from "prop-types";
import React from "react";
import BlogPreviewCard from "./BlogPreviewCard";

function ScrollableBlogs({ posts }) {
	return (
		<div className="flex max-h-full flex-nowrap items-start gap-x-4 overflow-x-auto py-12 md:gap-x-8 lg:gap-x-12">
			{posts.map(({ node: post }, index) => {
				if (index !== 0) {
					return <BlogPreviewCard post={post} key={post.id} />;
				}
				return null;
			})}
		</div>
	);
}

ScrollableBlogs.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
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
	).isRequired,
};

export default ScrollableBlogs;
