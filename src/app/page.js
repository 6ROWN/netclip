import AboutCards from "./components/AboutCards";
import AboutHero from "./components/AboutHero";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AnyDevices from "./components/AnyDevices";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutHero />
			<AboutCards />
			<AnyDevices />
			<Accordion />
			<Newsletter />
			<Footer />
			<ScrollToTop />
		</main>
	);
}
