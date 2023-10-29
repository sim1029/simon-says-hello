// @ts-nocheck
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as React from "react";
import Layout from "../../components/layout/Layout";
import BackButton from "../../components/layout/BackButton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import githubLogo from "../../images/github-dark.png";
import demoLink from "../../images/link-light.png";

const ProjectPage = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.logo);

	return (
		<Layout>
			<article className="prose mx-4 mb-12 self-center dark:prose-invert">
				<BackButton href={"/projects"} />
				<div className="my-8 flex items-center justify-between">
					{Boolean(image) && (
						<GatsbyImage
							className="inline"
							image={image}
							alt={data.mdx.frontmatter.title}
						/>
					)}
					<div className="flex space-x-8">
						{data.mdx.frontmatter.repository && (
							<a
								href={data.mdx.frontmatter.repository}
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={githubLogo}
									alt="github"
									className="w-14 dark:invert dark:filter"
								/>
							</a>
						)}
						{data.mdx.frontmatter.demo && (
							<a
								href={data.mdx.frontmatter.demo}
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={demoLink}
									alt="Active Project"
									className="w-14 dark:invert dark:filter"
								/>
							</a>
						)}
					</div>
				</div>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</article>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				logo {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 60)
					}
				}
				repository
				demo
			}
			body
		}
	}
`;

export default ProjectPage;
