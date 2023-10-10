import React from "react";
import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import SkillShelf from "../../components/skills/SkillShelf";

function SkillsPage() {
	const pageInfo = {
		description: `😀 Below is my "shelf of skills". These are the technologies I am most familiar with and I am constantly expanding this list 💪.`,
		title: "⚡️ Skills Page",
	};

	return (
		<Layout>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<PageHeader pageInfo={pageInfo} />
				<SkillShelf />
			</div>
		</Layout>
	);
}

export default SkillsPage;
