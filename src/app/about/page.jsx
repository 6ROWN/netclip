import AboutCards from "@/components/AboutCards";
import AboutHero from "@/components/AboutHero";
import Accordion from "@/components/Accordion";
import Newsletter from "@/components/Newsletter";

import React from "react";

const page = () => {
	return (
		<div>
			<AboutHero />
			<AboutCards />
			<Accordion />
			<Newsletter />
		</div>
	);
};

export default page;
