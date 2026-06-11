import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";
import BackButton from "../../../../components/layout/BackButton";
import { getBlogPosts, getBySlug } from "../../../../lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
	return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = getBySlug("blogs", slug);
	if (!post) return {};
	return {
		title: `${post.frontmatter.title} | Simon Says Hello`,
		description: post.frontmatter.description,
	};
}

export default async function BlogPost({ params }) {
	const { slug } = await params;
	const post = getBySlug("blogs", slug);
	if (!post) notFound();

	return (
		<article className="prose mx-4 mb-12 self-center dark:prose-invert">
			<BackButton href={"/blog"} />
			<h1 className="m-0">{post.frontmatter.title}</h1>
			<div className="flex justify-between">
				<p>Posted: {post.frontmatter.date}</p>
				<p>{post.timeToRead} min</p>
			</div>
			<MDXRemote source={post.body} />
		</article>
	);
}
