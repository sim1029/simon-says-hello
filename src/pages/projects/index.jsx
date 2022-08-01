import React from "react";
import Layout from "../../components/layout/Layout";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectArchive from "../../components/projects/ProjectArchive";

function ProjectsPage() {
	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<FeaturedProjects />
				<ProjectArchive />
			</div>
		</Layout>
	);
}

export default ProjectsPage;
