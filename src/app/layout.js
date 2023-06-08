import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Nextclip",
	description:
		"A video streaming service. It offers films and television series from various genres",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={merriweather.className}>{children}</body>
		</html>
	);
}
