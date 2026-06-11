import React from "react";
import PageHeader from "../../../components/layout/PageHeader";
import FeaturedProjects from "../../../components/projects/FeaturedProjects";
import ProjectArchive from "../../../components/projects/ProjectArchive";
import { getProjects } from "../../../lib/content";

export default function ProjectsPage() {
	const pageInfo = {
		description: `Prepare to be amazed 🤩 by my collection of inventions and tinkerings.
				Featured projects have live links you can visit to see
				them in production 💪. Archived projects contain some
				of my MVP, past, and failed projects 😅`,
		title: "💡 Projects Page",
	};

	const projects = getProjects();
	const featured = projects.filter(
		(project) => project.frontmatter.featuredProject === true,
	);
	const archived = projects.filter(
		(project) => project.frontmatter.featuredProject !== true,
	);

	return (
		<div className="flex h-full w-full flex-col items-center justify-center self-center sm:w-3/4">
			<PageHeader pageInfo={pageInfo} />
			<FeaturedProjects projects={featured} />
			<ProjectArchive projects={archived} />
		</div>
	);
}
