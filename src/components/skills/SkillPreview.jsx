/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import React from "react";

const SkillPreview = ({ skill }) => {
	const info = skill.frontmatter;

	const timeUsed = (startDate, endDate) => {
		const years = endDate.getFullYear() - startDate.getFullYear();
		const months = Math.abs(endDate.getMonth() - startDate.getMonth() + 1);

		let ret = "";
		if (years === 1) ret += `${years} year`;
		if (years > 1) ret += `${years} years`;
		if (years > 0) ret += ", ";
		if (months === 1) ret += `${months} month`;
		if (months > 1) ret += `${months} months`;
		return ret;
	};

	const currDate = new Date();
	const startDate = new Date(info.yoe);

	return (
		<div className="relative mx-4 mb-8 flex w-full flex-col items-center justify-evenly rounded-xl bg-slate-300 p-8 dark:bg-gray-700 md:ml-0 md:mr-8 md:w-64 md:space-y-6">
			<h1 className="text-2xl font-bold">{info.name}</h1>

			{info.logo && (
				<img src={info.logo.publicURL} alt={info.name} className="w-[100px]" />
			)}

			<h2 className="font-bold">{timeUsed(startDate, currDate)}</h2>
		</div>
	);
};

SkillPreview.propTypes = {
	skill: PropTypes.shape({
		frontmatter: PropTypes.shape({
			name: PropTypes.string,
			logo: PropTypes.shape({
				publicURL: PropTypes.string,
			}),
			description: PropTypes.string,
			yoe: PropTypes.string,
			proficiency: PropTypes.number,
			linkedProjects: PropTypes.arrayOf(PropTypes.string),
			linkedOrgs: PropTypes.arrayOf(PropTypes.string),
			linkedSkills: PropTypes.arrayOf(PropTypes.string),
		}),
	}).isRequired,
};

export default SkillPreview;
