require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "Simon Says Hello",
		description:
			"Portfolio website and software engineering blog of Simon Schueller",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/_blogs`,
				name: "blogs",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/_organizations`,
				name: "organizations",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/_projects`,
				name: "projects",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/_skills`,
				name: "skills",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/images`,
				name: "images",
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// gatsby-remark-relative-images must go before gatsby-remark-images
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							// [Optional] The root of "media_folder" in your config.yml
							// Defaults to "static"
							staticFolderName: "static",
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 1024 },
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							destinationDir: `${__dirname}/static`,
						},
					},
				],
			},
		},
		`gatsby-plugin-image`,
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [`.md`, `.mdx`],
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		"gatsby-plugin-postcss",
		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
};
