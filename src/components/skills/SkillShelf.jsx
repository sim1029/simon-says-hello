/* eslint-disable react/no-array-index-key */
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SkillPreview from "./SkillPreview";

const sortPosts = (data) => {
	const ret = data.allMdx.edges.sort((edge1, edge2) => {
		if (
			edge1.node.frontmatter.proficiency &&
			edge2.node.frontmatter.proficiency
		) {
			return (
				edge2.node.frontmatter.proficiency - edge1.node.frontmatter.proficiency
			);
		} else if (edge1.node.frontmatter.proficiency) {
			return edge1.node.frontmatter.proficiency;
		} else {
			return edge2.node.frontmatter.proficiency;
		}
	});
	return ret;
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
			<div className="flex flex-1 flex-wrap justify-center">
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
