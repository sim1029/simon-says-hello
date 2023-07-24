const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node); // convert image paths for gatsby images
};
