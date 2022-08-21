import React from "react";
import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectArchive from "../../components/projects/ProjectArchive";

const ProjectsPage = () => {
	const pageInfo = {
		description: `Prepare to be amazed 🤩 by my collection of inventions and tinkerings.
				Featured projects have live links you can visit to see
				them in production 💪. Archived projects contain some
				of my MVP, past, and failed projects 😅`,
		title: "💡 Projects Page",
	};

	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<PageHeader pageInfo={pageInfo} />
				<FeaturedProjects />
				<ProjectArchive />
			</div>
		</Layout>
	);
};

export default ProjectsPage;
