import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const OrganizationTimeline = () => {
	const data = useStaticQuery(graphql`
		query OrganizationsQuery {
			allMdx(filter: { frontmatter: { templateKey: { eq: "organization" } } }) {
				nodes {
					frontmatter {
						description
						logo {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 100)
							}
						}
						endDate
						linkedSkills
						linkedProjects
						name
						startDate
					}
					id
				}
			}
		}
	`);

	// function to split string into list based on newline character and replace "+" character with 👉 emoji
	const splitAndReplace = (str) => {
		return str.split("\n").map((item) => item.replace("+", "👉"));
	};

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

	const orgs = data.allMdx.nodes;

	// sort orgs by end date
	orgs.sort((a, b) => {
		if (a.frontmatter.endDate < b.frontmatter.endDate) {
			return 1;
		}
		if (a.frontmatter.endDate > b.frontmatter.endDate) {
			return -1;
		}
		return 0;
	});

	return (
		<div className="flex flex-col items-center space-y-8">
			<h1 className="text-center text-4xl font-bold">Organizations Timeline</h1>
			<ul className="flex w-[90%] flex-col items-center space-y-12 lg:w-[100%]">
				{orgs.map((org) => {
					const start = new Date(org.frontmatter.startDate);
					const end = new Date(org.frontmatter.endDate);
					const info = org.frontmatter;
					return (
						<li
							key={org.id}
							className="mx-2 flex w-full flex-col rounded-xl bg-slate-300 dark:bg-gray-700"
						>
							<div className="flex items-center space-x-4 rounded-t-xl bg-blue text-slate-200 dark:bg-red">
								{info.logo && (
									<GatsbyImage
										className="flex-shrink-0 rounded-tl-xl"
										image={getImage(info.logo)}
										alt={info.name}
									/>
								)}
								<div className="flex w-full flex-col">
									<div className="flex flex-col justify-between sm:flex-row sm:items-center sm:pr-4">
										<h1 className="sm:text-2xl">{info.name}</h1>
										<h2 className="text-sm font-bold sm:text-base">
											{timeWorked(start, end)}
										</h2>
									</div>
									<h2 className="">
										{formatDate(start)}
										{` - ${info.currentOrg ? "Present" : formatDate(end)}`}
									</h2>
								</div>
							</div>
							<div className="flex flex-col space-y-4 p-4">
								<div className="flex flex-col space-y-4">
									{splitAndReplace(info.description).map((point, index) => (
										<p key={index} className="text-lg">
											{point}
										</p>
									))}
								</div>
								{info.linkedSkills && info.linkedSkills.length > 0 && (
									<div className="flex flex-col">
										<h2 className="text-lg font-bold">Skills</h2>
										<ul className="flex space-x-4">
											{info.linkedSkills.map((skill, index) => (
												<li
													key={index}
													className="underline decoration-blue decoration-solid decoration-[3px] underline-offset-2 dark:border-red dark:decoration-red"
												>
													{skill}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default OrganizationTimeline;
