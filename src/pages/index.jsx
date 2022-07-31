import React from "react";
import Layout from "../components/layout/Layout";
import Contacts from "../components/splash/Contacts";
import OrganizationTimeline from "../components/splash/OrganizationTimeline";
import SplashHeader from "../components/splash/SplashHeader";

const Index = () => {
	return (
		<Layout>
			<div className="my-8 flex flex-col items-center space-y-24">
				<SplashHeader />
				<OrganizationTimeline />
				<Contacts />
			</div>
		</Layout>
	);
};

export default Index;
