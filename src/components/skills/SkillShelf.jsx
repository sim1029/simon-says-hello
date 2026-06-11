/* eslint-disable react/no-array-index-key */
import React from "react";
import SkillPreview from "./SkillPreview";

const sortSkills = (skills) => {
	return [...skills].sort((a, b) => {
		const dateA = new Date(a.frontmatter.yoe);
		const dateB = new Date(b.frontmatter.yoe);
		return dateA - dateB;
	});
};

const SkillShelf = ({ skills }) => {
	return (
		<div className="contents">
			<h1 className="mb-8 text-4xl font-bold">Skill Shelf</h1>
			<div className="mx-8 flex flex-1 flex-wrap justify-center">
				{sortSkills(skills).map((skill, idx) => {
					return (
						<SkillPreview
							skill={skill}
							key={`${skill.frontmatter.name}-${idx}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SkillShelf;
