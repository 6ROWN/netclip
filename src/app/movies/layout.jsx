"use client";
import Header from "../components/Header";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import loading from "../loading";
import ScrollToTop from "../components/ScrollToTop";

const layout = ({ children }) => {
	const router = useRouter();

	const { session, status } = useSession({
		required: true,
		// onUnauthenticated() {
		// 	// router.push("/");
		// },
	});

	useEffect(() => {
		if (status !== "authenticated") {
			// Redirect to the home page if the user is not authenticated
			router.push("/");
		}
	}, [router, status]);

	if (status === "loading") {
		// Render a loading state while the session is being fetched
		loading;
	}

	return (
		<div>
			<Header />
			<div className="flex flex-col min-h-[80vh]">{children}</div>
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default layout;
