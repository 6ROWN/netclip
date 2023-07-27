import "./globals.css";
import Providers from "./Providers";
import AuthProvider from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { Merriweather } from "next/font/google";

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
		<html lang="en" className={merriweather.className}>
			<body
				className={` overflow-x-hidden`}
				suppressHydrationWarning={true}
			>
				<Providers>
					<AuthProvider>{children}</AuthProvider>
				</Providers>
			</body>
		</html>
	);
}
