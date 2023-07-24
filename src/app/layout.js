import { Merriweather } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import AuthProvider from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

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
				<AuthProvider>
					<Providers>{children}</Providers>
				</AuthProvider>
			</body>
		</html>
	);
}
