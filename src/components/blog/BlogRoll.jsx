import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ScrollableBlogs from "./ScrollableBlogs";
import SpotlightBlog from "./SpotlightBlog";

function BlogRoll() {
	const data = useStaticQuery(graphql`
		query BlogRollQuery {
			allPageViews {
				nodes {
					path
					totalCount
				}
			}
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

	function formatViews(views) {
		if (views >= 1000000) {
			return `${(views / 1000000).toFixed(1)}M`;
		} else if (views >= 1000) {
			return `${(views / 1000).toFixed(1)}k`;
		} else {
			return `${views}`;
		}
	}

	const posts = data.allMdx.nodes;
	const blogViews = data.allPageViews.nodes.filter((node) =>
		node.path.includes("/blog/"),
	);
	const sortedPosts = posts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date);
		const dateB = new Date(b.frontmatter.date);
		return dateB - dateA;
	});

	const postsWithViews = sortedPosts.map((post) => {
		const postViews = blogViews.filter(
			(view) => view.path.slice("/blog/".length) === post.slug,
		);
		return {
			...post,
			views: postViews.length > 0 ? formatViews(postViews[0].totalCount) : 0,
		};
	});

	const featuredPost = postsWithViews.filter(
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
						<ScrollableBlogs posts={postsWithViews} />
					</div>
				</div>
			)}
		</div>
	);
}

export default BlogRoll;
