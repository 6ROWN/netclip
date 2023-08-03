import "./globals.css";
import Providers from "./Providers";
import AuthProvider from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: "500",
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Netclip",
	description:
		"A video streaming service. It offers films and television series from various genres",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={roboto.className}>
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
