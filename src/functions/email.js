/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-template */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
	process.env;

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context, callback) => {
	const payload = JSON.parse(event.body);

	sgMail.setApiKey(SENDGRID_API_KEY);

	const body = Object.keys(payload)
		.map((k) => {
			return `${k}: ${payload[k]}`;
		})
		.join("<br><br>");

	const msg = {
		to: SENDGRID_TO_EMAIL,
		from: SENDGRID_FROM_EMAIL,
		subject: "Contact Form Submission",
		html: body,
	};

	try {
		await sgMail.send(msg);

		return {
			statusCode: 200,
			body: "Message sent",
		};
	} catch (e) {
		return {
			statusCode: e.code ? e.code : 500,
			body: e.message ? e.message : "Error attempting to send email message",
		};
	}
};
