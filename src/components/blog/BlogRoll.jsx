import React from "react";
import ScrollableBlogs from "./ScrollableBlogs";
import SpotlightBlog from "./SpotlightBlog";

function BlogRoll({ posts }) {
	// posts arrive sorted newest-first from lib/content
	const featuredPost = posts.filter(
		(post) => post.frontmatter.featuredpost === true,
	);

	// strip the markdown body before handing posts to the client component
	const previews = posts.map(({ body, ...post }) => post);

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
						<ScrollableBlogs posts={previews} />
					</div>
				</div>
			)}
		</div>
	);
}

export default BlogRoll;
