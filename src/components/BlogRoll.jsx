import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ScrollableBlogs from "./ScrollableBlogs";
import SpotlightBlog from "./SpotlightBlog";

function BlogRoll() {
	const data = useStaticQuery(graphql`
		query BlogRollQuery {
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 1500, format: HTML)
						fields {
							slug
						}
						frontmatter {
							title
							templateKey
							tags
							date(formatString: "MMMM DD, YYYY")
							featuredpost
							description
							featuredimage {
								childImageSharp {
									gatsbyImageData(
										placeholder: BLURRED
										layout: CONSTRAINED
										height: 225
									)
								}
							}
						}
						timeToRead
					}
				}
			}
		}
	`);

	const { edges: posts } = data.allMarkdownRemark;

	// Delete after testing
	const extraPosts = [...posts, ...posts, ...posts];

	return (
		<div className="flex flex-col gap-y-10 px-4 py-4 md:px-8 lg:px-20 lg:py-10">
			{posts && (
				<div className="contents">
					<div className="flex flex-col items-center gap-y-8">
						<h1 className="text-4xl font-bold">Spotlight Post</h1>
						<SpotlightBlog edge={posts[0]} />
					</div>
					<div className="flex flex-col space-y-8">
						<h1 className="self-center text-4xl font-bold lg:self-start">
							Recent Posts
						</h1>
						<ScrollableBlogs posts={extraPosts} />
					</div>
					<div className="flex flex-col space-y-8">
						<h1 className="self-center text-4xl font-bold lg:self-start">
							Popular Posts
						</h1>
						<ScrollableBlogs posts={posts} />
					</div>
				</div>
			)}
		</div>
	);
}

export default BlogRoll;
