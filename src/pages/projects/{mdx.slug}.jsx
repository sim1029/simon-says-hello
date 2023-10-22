// @ts-nocheck
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../../components/layout/Layout";
import BackButton from "../../components/layout/BackButton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useColorMode } from "../../context/useColorMode";
import githubDarkLogo from "../../images/social/github-icon-dark.svg";
import githubLogo from "../../images/social/github-icon.svg";
import liveLink from "../../images/svg/link.svg";

const ProjectPage = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.logo);
	const theme = useColorMode();
	const githubIcon = theme === "dark" ? githubDarkLogo : githubLogo;
	return (
		<Layout>
			<article className="prose prose-xl mb-12 self-center dark:prose-invert">
				<BackButton href={"/projects"} />
				<div className="my-8 flex items-center justify-between">
					{Boolean(image) && (
						<GatsbyImage
							className="hidden md:inline"
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
								<img src={githubIcon} alt="github" className="w-14" />
							</a>
						)}
						{data.mdx.frontmatter.demo && (
							<a
								href={data.mdx.frontmatter.demo}
								target="_blank"
								rel="noreferrer"
							>
								<img src={liveLink} alt="Active Project" className="w-14" />
							</a>
						)}
					</div>
				</div>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</article>
		</Layout>
	);
};

ProjectPage.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
				date: PropTypes.string,
				repository: PropTypes.string,
				demo: PropTypes.string,
			}),
			body: PropTypes.string,
		}),
	}).isRequired,
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
