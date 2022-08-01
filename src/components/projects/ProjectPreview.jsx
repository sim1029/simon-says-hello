// @ts-nocheck
/* eslint-disable react/no-array-index-key */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { useColorMode } from "../../context/useColorMode";
import githubDarkLogo from "../../img/social/github-icon-dark.svg";
import githubLogo from "../../img/social/github-icon.svg";
import liveLink from "../../img/svg/link.svg";

const ProjectPreview = ({ project }) => {
	const theme = useColorMode();
	const githubIcon = theme === "dark" ? githubDarkLogo : githubLogo;

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
		<div className="group mb-8 flex h-[250px] min-w-[500px] max-w-[600px] flex-col justify-evenly rounded-xl border-4 border-slate-300 bg-slate-300 px-4 shadow-md transition-transform duration-200 ease-out hover:translate-x-3 hover:-translate-y-3 hover:border-blue dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red md:mr-8">
			<Link to={`/projects/${project.slug}`} className="contents">
				<article className="contents">
					<div className="flex items-center space-x-4">
						{Boolean(image) && (
							<GatsbyImage
								className="hidden md:inline"
								image={image}
								alt={info.title}
							/>
						)}
						<h1 className="mr-4 text-2xl font-bold">
							{info.title.length > 30
								? `${info.title.slice(0, 30)}...`
								: info.title}
						</h1>
					</div>
					<div className="flex justify-between">
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
					<p>{info.description.slice(0, 70)}</p>
					<div className="flex space-x-6">
						{info.repository && (
							<a href={info.repository}>
								<img src={githubIcon} alt="github" className="w-10" />
							</a>
						)}
						{info.demo && (
							<a href={info.demo}>
								<img src={liveLink} alt="Active Project" className="w-10" />
							</a>
						)}
					</div>
					<ul className="flex items-center space-x-4 text-sm">
						{Boolean(info.linkedSkills) && (
							<>
								<h2 className="text-lg font-bold">Skills: </h2>
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
			</Link>
		</div>
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
