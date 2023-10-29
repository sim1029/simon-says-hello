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

export default ScrollableBlogs;
