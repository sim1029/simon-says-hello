require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const { createProxyMiddleware } = require("http-proxy-middleware"); //v1.x.x

module.exports = {
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
	developMiddleware: (app) => {
		app.use(
			"/.netlify/functions/",
			createProxyMiddleware({
				target: "http://localhost:9000",
				pathRewrite: {
					"/.netlify/functions/": "",
				},
			}),
		);
	},
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
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 1024 },
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Simon Says Hello",
				short_name: "Simon Says Hello",
				start_url: "/",
				background_color: "#1F2937",
				theme_color: "#E94560",
				display: "standalone",
				icon: "src/images/icon.png",
				crossOrigin: `use-credentials`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics-data-reporting-api`,
			options: {
				serviceAccountEmail: process.env.ANALYTICS_EMAIL,
				privateKey: process.env.ANALYTICS_PRIVATE_KEY,
				property: process.env.ANALYTICS_PROPERTY,
				endDate: `today`,
				desc: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [process.env.GA_ID],
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
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1024,
						},
					},
				],
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
