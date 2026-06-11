import React from "react";
import Contacts from "../../components/splash/Contacts";
import OrganizationTimeline from "../../components/splash/OrganizationTimeline";
import SplashHeader from "../../components/splash/SplashHeader";
import { getOrganizations } from "../../lib/content";

export default function Index() {
	const orgs = getOrganizations();

	return (
		<div className="my-8 flex flex-col items-center space-y-24">
			<SplashHeader />
			<OrganizationTimeline orgs={orgs} />
			<Contacts />
		</div>
	);
}
