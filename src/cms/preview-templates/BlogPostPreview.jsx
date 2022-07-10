import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

function BlogPostPreview({ entry, widgetFor }) {
	const tags = entry.getIn(["data", "tags"]);
	return (
		<BlogPostTemplate
			content={widgetFor("body")}
			description={entry.getIn(["data", "description"])}
			tags={tags && tags.toJS()}
			title={entry.getIn(["data", "title"])}
		/>
	);
}

BlogPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}).isRequired,
	widgetFor: PropTypes.func.isRequired,
};

export default BlogPostPreview;
