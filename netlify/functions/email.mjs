import sgMail from "@sendgrid/mail";

const escapeHtml = (value) =>
	String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

export default async (req) => {
	if (req.method !== "POST") {
		return new Response("Method Not Allowed", { status: 405 });
	}

	const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
		process.env;

	let payload;
	try {
		payload = await req.json();
	} catch {
		return new Response("Invalid JSON body", { status: 400 });
	}

	const fields = ["firstName", "lastName", "email", "message"];
	const body = fields
		.filter((field) => payload[field])
		.map((field) => `${field}: ${escapeHtml(payload[field])}`)
		.join("<br><br>");

	sgMail.setApiKey(SENDGRID_API_KEY);

	try {
		await sgMail.send({
			to: SENDGRID_TO_EMAIL,
			from: SENDGRID_FROM_EMAIL,
			subject: "Contact Form Submission",
			html: body,
		});
		return new Response("Message sent", { status: 200 });
	} catch (e) {
		return new Response(e.message ?? "Error attempting to send email message", {
			status: 500,
		});
	}
};
