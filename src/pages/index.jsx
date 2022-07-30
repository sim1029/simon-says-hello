import React from "react";
import Layout from "../components/layout/Layout";
import OrganizationTimeline from "../components/splash/OrganizationTimeline";
import SplashHeader from "../components/splash/SplashHeader";

const Index = () => {
	return (
		<Layout>
			<div className="my-8 flex flex-col items-center space-y-8">
				<SplashHeader />
				<OrganizationTimeline />
			</div>
		</Layout>
	);
};

export default Index;
