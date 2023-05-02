// @ts-nocheck
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../../components/layout/Layout";
import BackButton from "../../components/layout/BackButton";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectPage = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.logo);
	return (
		<Layout>
			<article className="prose prose-xl mb-12 self-center dark:prose-invert">
				<BackButton href={"/projects"} />
				<div className="mb-8 flex items-center space-x-8">
					{Boolean(image) && (
						<GatsbyImage
							className="hidden md:inline"
							image={image}
							alt={data.mdx.frontmatter.title}
						/>
					)}
					<h1 className="m-0">{data.mdx.frontmatter.title}</h1>
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
			}
			body
		}
	}
`;

export default ProjectPage;
