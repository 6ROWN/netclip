"use client";
import Header from "../components/Header";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

const layout = ({ children }) => {
	const router = useRouter();

	const { session, status } = useSession({
		required: true,
		// onUnauthenticated() {
		// 	// router.push("/");
		// },
	});

	if (status === "loading") {
		// Render a loading state while the session is being fetched
		return <div></div>;
	}

	useEffect(() => {
		if (status !== "authenticated") {
			// Redirect to the home page if the user is not authenticated
			router.push("/");
			null;
		}
	}, [router, status]);

	return (
		<div>
			<Header />
			<div className="flex flex-col min-h-[80vh]">{children}</div>

			<Footer />
		</div>
	);
};

export default layout;
