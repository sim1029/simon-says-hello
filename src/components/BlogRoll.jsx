import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ScrollableBlogs from "./ScrollableBlogs";
import SpotlightBlog from "./SpotlightBlog";

function BlogRoll() {
	const data = useStaticQuery(graphql`
		query BlogRollQuery {
			allMdx(filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
				nodes {
					frontmatter {
						title
						description
						date(formatString: "MMMM D, YYYY")
						featuredpost
						tags
						templateKey
					}
					timeToRead
					body
					id
					slug
				}
			}
		}
	`);

	const posts = data.allMdx.nodes;

	return (
		<div className="flex flex-col gap-y-12 px-4 py-4 md:px-8 lg:px-20 lg:py-10">
			{posts && (
				<div className="contents">
					<div className="flex flex-col items-center gap-y-8">
						<h1 className="text-4xl font-bold">Spotlight Post</h1>
						<SpotlightBlog post={posts[0]} />
					</div>
					<div className="flex flex-col space-y-8">
						<h1 className="self-center text-4xl font-bold">Recent Posts</h1>
						<ScrollableBlogs posts={posts} />
					</div>
					<div className="flex flex-col space-y-8">
						<h1 className="self-center text-4xl font-bold">Popular Posts</h1>
						<ScrollableBlogs posts={posts} />
					</div>
				</div>
			)}
		</div>
	);
}

export default BlogRoll;
