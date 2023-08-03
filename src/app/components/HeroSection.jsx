"use client";
import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Logo from "./Logo";
import { useSession } from "next-auth/react";

const HeroSection = () => {
	const { status } = useSession();

	return (
		<div
			className={`bg-[url("/hero-img.jpg")] bg-cover bg-no-repeat h-screen filter brightness-75`}
		>
			<div className="flex justify-between items-center p-4 md:px-20 md:py-4">
				<Logo />
				<Link
					href={
						status === "authenticated" ? "/movies" : "/auth/signIn"
					}
				>
					<CustomButton
						title={"Sign In"}
						color="text-white"
						bgColor="bg-blue-700"
					/>
				</Link>
			</div>
			<div
				className="px-4 md:px-0 flex flex-col items-center justify-center min-h-screen gap-[40px] custom-shadow
			"
			>
				<h1 className="font-black text-3xl md:text-5xl text-white text-center">
					Unlimited movies, TV shows, and more
				</h1>
				<p className="text-2xl font-medium  text-white text-center">
					Ready to watch? Click the button to get started.
				</p>
				<Link
					href={
						status === "authenticated" ? "/movies" : "/auth/signIn"
					}
				>
					<CustomButton
						title={"GET STARTED"}
						color="text-white"
						bgColor="bg-blue-700"
					/>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
