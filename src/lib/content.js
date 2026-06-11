import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

const WORDS_PER_MINUTE = 265; // same average Gatsby used for timeToRead

function timeToRead(text) {
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatDate(value) {
	if (!value) return null;
	return new Date(value).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	});
}

// gray-matter parses YAML timestamps into Date objects; convert them to ISO
// strings so entries can cross the server/client component boundary untouched
function serialize(data) {
	const out = {};
	Object.entries(data).forEach(([key, value]) => {
		if (value instanceof Date) {
			out[key] = value.toISOString();
		} else {
			out[key] = value === undefined ? null : value;
		}
	});
	return out;
}

function readCollection(name) {
	const dir = path.join(contentDir, name);
	return fs
		.readdirSync(dir)
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const raw = fs.readFileSync(path.join(dir, file), "utf8");
			const { data, content } = matter(raw);
			return {
				slug: file.replace(/\.md$/, ""),
				frontmatter: serialize(data),
				body: content,
				timeToRead: timeToRead(content),
			};
		});
}

export function getBlogPosts() {
	return readCollection("blogs")
		.map((post) => ({
			...post,
			frontmatter: {
				...post.frontmatter,
				// the UI always shows the "MMMM D, YYYY" form, like the old GraphQL query
				date: formatDate(post.frontmatter.date),
			},
		}))
		.sort(
			(a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
		);
}

export function getProjects() {
	return readCollection("projects");
}

export function getOrganizations() {
	return readCollection("organizations");
}

export function getSkills() {
	return readCollection("skills");
}

export function getBySlug(collection, slug) {
	return (
		readCollection(collection).find((entry) => entry.slug === slug) ?? null
	);
}
