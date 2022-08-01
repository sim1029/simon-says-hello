import React from "react";
import Layout from "../../components/layout/Layout";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectArchive from "../../components/projects/ProjectArchive";
import ProjectsHeader from "../../components/projects/ProjectsHeader";

const ProjectsPage = () => {
	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<ProjectsHeader />
				<FeaturedProjects />
				<ProjectArchive />
			</div>
		</Layout>
	);
};

export default ProjectsPage;
