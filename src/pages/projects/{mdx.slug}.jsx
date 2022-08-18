// @ts-nocheck
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../../components/layout/Layout";

const ProjectPage = ({ data }) => {
	return (
		<Layout>
			<article className="prose prose-xl self-center dark:prose-invert">
				<h2>{data.mdx.frontmatter.title}</h2>
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
			}
			body
		}
	}
`;

export default ProjectPage;
