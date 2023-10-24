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
						hero_image_alt
						hero_image {
							childImageSharp {
								gatsbyImageData(
									placeholder: BLURRED
									layout: FIXED
									height: 150
								)
							}
						}
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
	const sortedPosts = posts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date);
		const dateB = new Date(b.frontmatter.date);
		return dateA - dateB;
	});

	const featuredPost = posts.filter(
		(post) => post.frontmatter.featuredpost === true,
	);

	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-y-12">
			{posts && (
				<div className="contents">
					<div className="flex flex-col items-center gap-y-8">
						<h1 className="text-4xl font-bold">Spotlight Post</h1>
						<SpotlightBlog post={featuredPost[0]} />
					</div>
					<div className="flex w-full flex-col space-y-8 sm:w-3/4">
						<h1 className="self-center text-4xl font-bold">All Posts</h1>
						<ScrollableBlogs posts={sortedPosts} />
					</div>
				</div>
			)}
		</div>
	);
}

export default BlogRoll;
