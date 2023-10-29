import PropTypes from "prop-types";
import React, { useCallback } from "react";
import PaginationScroll from "../layout/PaginationScroll";
import BlogPreviewCard from "./BlogPreviewCard";

const ScrollableBlogs = ({ posts }) => {
	const [page, setPage] = React.useState(0);

	const handleRightClick = useCallback(() => {
		if (page < posts.length / 4 - 1) setPage(page + 1);
	}, [page, setPage]);

	const handleLeftClick = useCallback(() => {
		if (page > 0) setPage(page - 1);
	}, [page, setPage]);

	return (
		<div className="flex flex-col space-y-8">
			<div className="mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
				{posts.slice(page * 4, page * 4 + 4).map((post) => {
					return <BlogPreviewCard post={post} key={post.id} />;
				})}
			</div>
			<PaginationScroll
				handleLeftClick={handleLeftClick}
				handleRightClick={handleRightClick}
				length={posts.length}
				page={page}
			/>
		</div>
	);
};

ScrollableBlogs.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			post: PropTypes.shape({
				frontmatter: PropTypes.shape({
					title: PropTypes.string,
					templateKey: PropTypes.string,
					date: PropTypes.string,
					featuredPost: PropTypes.bool,
					description: PropTypes.string,
					featuredimage: PropTypes.string,
					tags: PropTypes.arrayOf(PropTypes.string),
				}),
				timeToRead: PropTypes.number,
				id: PropTypes.string,
				body: PropTypes.string,
				slug: PropTypes.string,
			}),
			views: PropTypes.number,
		}),
	).isRequired,
};

export default ScrollableBlogs;
