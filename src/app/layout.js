import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const merriweather = Merriweather({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Netclip",
	description:
		"A video streaming service. It offers films and television series from various genres",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${merriweather.className} overflow-x-hidden`}>
				<Providers>
					{/* Header */}
					<Header />
					{children}
					{/* Footer */}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
