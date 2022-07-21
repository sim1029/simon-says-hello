import { TiArrowLeft } from "@react-icons/all-files/ti/TiArrowLeft";
import { TiArrowRight } from "@react-icons/all-files/ti/TiArrowRight";
import classNames from "classnames";
import { PropTypes } from "prop-types";
import React, { useCallback } from "react";
import BlogPreviewCard from "./BlogPreviewCard";

const ScrollableBlogs = ({ posts }) => {
	const [page, setPage] = React.useState(0);
	const pageNums = [...Array(posts.length / 4).keys()];

	const handleRightClick = useCallback(() => {
		if (page < posts.length / 4 - 1) setPage(page + 1);
	});

	const handleLeftClick = useCallback(() => {
		if (page > 0) setPage(page - 1);
	});

	return (
		<div className="flex flex-1 flex-wrap justify-center lg:justify-start">
			{posts.slice(page * 4, page * 4 + 4).map(({ node: post }) => {
				return <BlogPreviewCard post={post} key={post.id} />;
			})}
			<div className="flex w-full items-center justify-center space-x-4">
				<button
					type="button"
					className=" text-2xl font-bold"
					onClick={handleLeftClick}
				>
					{page > 0 && <TiArrowLeft />}
				</button>
				<div className="flex items-center space-x-4">
					{posts.length > 4 &&
						pageNums.map((num) => {
							return (
								<h1
									className={classNames("hover:cursor-default", {
										"rounded-md bg-blue py-1 px-3 text-white": page === num,
									})}
								>
									{num + 1}
								</h1>
							);
						})}
				</div>
				<button
					type="button"
					className="text-2xl font-bold"
					onClick={handleRightClick}
				>
					{page < posts.length / 4 - 1 && <TiArrowRight />}
				</button>
			</div>
		</div>
	);
};

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
	).isRequired,
};

export default ScrollableBlogs;
