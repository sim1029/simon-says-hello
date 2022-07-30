import React from "react";
import Layout from "../components/layout/Layout";
import SplashHeader from "../components/splash/SplashHeader";

const Index = () => {
	return (
		<Layout>
			<div className="my-8 flex flex-col">
				<SplashHeader />
			</div>
		</Layout>
	);
};

export default Index;
