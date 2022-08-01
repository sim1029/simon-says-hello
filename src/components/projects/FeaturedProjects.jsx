import { graphql, useStaticQuery } from "gatsby";
import React, { useCallback } from "react";
import PaginationScroll from "../layout/PaginationScroll";
import ProjectPreview from "./ProjectPreview";

const FeaturedProjects = () => {
	const data = useStaticQuery(graphql`
		query ProjectsFeaturedQuery {
			allMdx(
				filter: {
					frontmatter: {
						templateKey: { eq: "project" }
						featuredProject: { eq: true }
					}
				}
			) {
				nodes {
					frontmatter {
						demo
						description
						startDate
						endDate
						logo {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 40)
							}
						}
						repository
						title
						status
						linkedSkills
						linkedOrgs
					}
					id
					slug
				}
			}
		}
	`);

	const [page, setPage] = React.useState(0);
	const { length } = data.allMdx.nodes;

	const handleRightClick = useCallback(() => {
		if (page < length / 4 - 1) setPage(page + 1);
	}, [page, setPage]);

	const handleLeftClick = useCallback(() => {
		if (page > 0) setPage(page - 1);
	}, [page, setPage]);

	if (length === 0) return null;

	return (
		<div className="flex flex-col space-y-8">
			<h1 className="self-center text-4xl font-bold">Featured Projects</h1>
			<div className="flex flex-1 flex-wrap justify-center">
				{data.allMdx.nodes.slice(page * 4, page * 4 + 4).map((project) => {
					return <ProjectPreview project={project} key={project.id} />;
				})}
			</div>
			<PaginationScroll
				handleRightClick={handleRightClick}
				handleLeftClick={handleLeftClick}
				page={page}
				length={length}
			/>
		</div>
	);
};

export default FeaturedProjects;
