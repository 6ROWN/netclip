import AboutCards from "./components/AboutCards";
import AboutHero from "./components/AboutHero";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<AboutHero />
			<AboutCards />
			<Accordion />
			<Newsletter />
			<Footer />
		</main>
	);
}
