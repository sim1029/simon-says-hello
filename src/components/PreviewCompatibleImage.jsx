import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

function PreviewCompatibleImage({ imageInfo, imageStyle }) {
	const { alt = "", childImageSharp, image } = imageInfo;

	if (!!image && !!image.childImageSharp) {
		return (
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				className={imageStyle}
				alt={alt}
			/>
		);
	}
	if (childImageSharp) {
		return (
			<GatsbyImage
				image={childImageSharp.gatsbyImageData}
				className={imageStyle}
				alt={alt}
			/>
		);
		// for Netlify CMS
	}
	if (image) {
		return <img className={imageStyle} src={image} alt={alt} />;
	}
	return null;
}

PreviewCompatibleImage.propTypes = {
	imageInfo: PropTypes.shape({
		alt: PropTypes.string,
		childImageSharp: PropTypes.shape({
			gatsbyImageData: PropTypes.node,
		}),
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}).isRequired,
	imageStyle: PropTypes.string,
};

PreviewCompatibleImage.defaultProps = {
	imageStyle: "",
};

export default PreviewCompatibleImage;
