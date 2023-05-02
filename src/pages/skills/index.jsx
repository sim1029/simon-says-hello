import React from "react";
import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/layout/PageHeader";
import SkillShelf from "../../components/skills/SkillShelf";

function SkillsPage() {
	const pageInfo = {
		description: `😀 Below is my "shelf of skills". Projects and organizations listed on this website have meta tags 🏷. These tags are used to sort and size the skill logos 💪 you see on the shelf below.`,
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
