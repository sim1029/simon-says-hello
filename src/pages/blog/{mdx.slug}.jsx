import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PropTypes } from "prop-types";
import * as React from "react";
import Layout from "../../components/layout/Layout";
import BackButton from "../../components/layout/BackButton";

const BlogPost = ({ data }) => {
	return (
		<Layout>
			<article className="prose mx-4 mb-12 self-center dark:prose-invert">
				<BackButton href={"/blog"} />
				<h1 className="m-0">{data.mdx.frontmatter.title}</h1>
				<div className="flex justify-between">
					<p>Posted: {data.mdx.frontmatter.date}</p>
					<p>{data.mdx.timeToRead} min</p>
				</div>
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
			timeToRead
			body
		}
	}
`;

export default BlogPost;
