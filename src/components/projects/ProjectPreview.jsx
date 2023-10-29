// @ts-nocheck
/* eslint-disable react/no-array-index-key */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

const ProjectPreview = ({ project }) => {
	const info = project.frontmatter;
	const image = getImage(info.logo);
	const padTo2Digits = (num) => {
		return num.toString().padStart(2, "0");
	};

	const formatDate = (date) => {
		return [padTo2Digits(date.getMonth() + 1), date.getFullYear()].join("/");
	};

	const timeWorked = (startDate, endDate) => {
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

	const start =
		info.startDate && info.startDate !== "" ? new Date(info.startDate) : null;
	const end =
		info.endDate && info.endDate !== "" ? new Date(info.endDate) : null;

	return (
		<Link to={`/projects/${project.slug}`} className="contents">
			<div className="group flex w-full flex-col overflow-x-hidden overflow-ellipsis rounded-xl border-4 border-slate-300 bg-slate-300 px-4 shadow-md transition-transform duration-200 ease-out hover:border-blue dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red">
				<article className="contents">
					<div className="mb-2 mt-4 flex items-start space-x-4">
						{Boolean(image) && (
							<GatsbyImage className="inline" image={image} alt={info.title} />
						)}
						<h2 className="text-xl font-bold sm:text-3xl">{info.title}</h2>
					</div>

					<div className="flex justify-between text-xs sm:text-base">
						<h2 className="">
							{formatDate(start)}
							{` - ${!end ? "Present" : formatDate(end)}`}
						</h2>
						<h2>
							{start && end
								? timeWorked(start, end)
								: timeWorked(start, new Date())}
						</h2>
					</div>
					<p className="mb-auto mt-4 sm:text-lg">
						{info.description.slice(0, 70)}
					</p>
					<ul className="my-4 flex items-center space-x-4 text-xs sm:text-sm">
						{Boolean(info.linkedSkills) && (
							<>
								{info.linkedSkills.map((skill, index) => (
									<li
										key={index}
										className="font-bold underline decoration-blue decoration-solid decoration-[3px] underline-offset-2 dark:border-red dark:decoration-red"
									>
										{skill}
									</li>
								))}
							</>
						)}
					</ul>
				</article>
			</div>
		</Link>
	);
};

ProjectPreview.propTypes = {
	project: PropTypes.shape({
		frontmatter: PropTypes.shape({
			demo: PropTypes.string,
			description: PropTypes.string,
			startDate: PropTypes.string,
			endDate: PropTypes.string,
			logo: PropTypes.shape({
				childImageSharp: PropTypes.shape({
					gatsbyImageData: PropTypes.string,
				}),
			}),
			repository: PropTypes.string,
			title: PropTypes.string,
			status: PropTypes.bool,
			linkedSkills: PropTypes.arrayOf(PropTypes.string),
			linkedOrgs: PropTypes.arrayOf(PropTypes.string),
		}),
		id: PropTypes.string,
		slug: PropTypes.string,
	}).isRequired,
};

export default ProjectPreview;
