/* eslint-disable react/no-array-index-key */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SkillPreview from "./SkillPreview";

const sortPosts = (data) => {
	const sortedData = data.allMdx.edges.sort((a, b) => {
		const dateA = new Date(a.node.frontmatter.yoe);
		const dateB = new Date(b.node.frontmatter.yoe);
		return dateA - dateB;
	});
	return sortedData;
};

const SkillShelf = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allMdx(filter: { frontmatter: { templateKey: { eq: "skill" } } }) {
				edges {
					node {
						frontmatter {
							name
							logo {
								publicURL
							}
							description
							yoe
							proficiency
							linkedProjects
							linkedOrgs
							linkedSkills
						}
					}
				}
			}
		}
	`);

	return (
		<div className="contents">
			<h1 className="mb-8 text-4xl font-bold">Skill Shelf</h1>
			<div className="mx-8 flex flex-1 flex-wrap justify-center">
				{sortPosts(data).map((edge, idx) => {
					const { node } = edge;
					return (
						<SkillPreview
							skill={node}
							key={`${node.frontmatter.name}-${idx}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SkillShelf;
