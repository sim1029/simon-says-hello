import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";
import BackButton from "../../../../components/layout/BackButton";
import githubLogo from "../../../../images/github-dark.png";
import demoLink from "../../../../images/link-light.png";
import { getBySlug, getProjects } from "../../../../lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
	return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getBySlug("projects", slug);
	if (!project) return {};
	return {
		title: `${project.frontmatter.title} | Simon Says Hello`,
		description: project.frontmatter.description,
	};
}

export default async function ProjectPage({ params }) {
	const { slug } = await params;
	const project = getBySlug("projects", slug);
	if (!project) notFound();
	const info = project.frontmatter;

	return (
		<article className="prose mx-4 mb-12 self-center dark:prose-invert">
			<BackButton href={"/projects"} />
			<div className="my-8 flex items-center justify-between">
				{Boolean(info.logo) && (
					<img className="inline w-[60px]" src={info.logo} alt={info.title} />
				)}
				<div className="flex space-x-8">
					{info.repository && (
						<a href={info.repository} target="_blank" rel="noreferrer">
							<img
								src={githubLogo.src}
								alt="github"
								className="w-14 dark:invert dark:filter"
							/>
						</a>
					)}
					{info.demo && (
						<a href={info.demo} target="_blank" rel="noreferrer">
							<img
								src={demoLink.src}
								alt="Active Project"
								className="w-14 dark:invert dark:filter"
							/>
						</a>
					)}
				</div>
			</div>
			<MDXRemote source={project.body} />
		</article>
	);
}
