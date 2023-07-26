import "./globals.css";
import Providers from "./Providers";
import AuthProvider from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { merriweather } from "@/app/utils/font";

export const metadata = {
	title: "Netclip",
	description:
		"A video streaming service. It offers films and television series from various genres",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`${merriweather.className} overflow-x-hidden`}
			>
				<Providers>
					<AuthProvider>{children}</AuthProvider>
				</Providers>
			</body>
		</html>
	);
}
