import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PropTypes } from "prop-types";
import * as React from "react";
import Layout from "../../components/Layout";

const BlogPost = ({ data }) => {
	return (
		<Layout>
			<article className="prose prose-xl self-center dark:prose-invert">
				<h2>{data.mdx.frontmatter.title}</h2>
				<p>Posted: {data.mdx.frontmatter.date}</p>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</article>
		</Layout>
	);
};

BlogPost.propTypes = {
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
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`;

export default BlogPost;
