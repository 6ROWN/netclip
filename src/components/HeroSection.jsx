import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const HeroSection = () => {
	return (
		<div
			className={`bg-[url("/hero-img.jpg")] bg-cover bg-no-repeat h-screen `}
		>
			<div className="px-4 md:px-0 flex flex-col items-center justify-center min-h-screen gap-[40px] custom-shadow">
				<h1 className="font-black text-3xl md:text-4xl text-white text-center">
					Unlimited movies, TV shows, and more
				</h1>
				<p className="text-lg font-medium  text-white">
					Ready to watch? Click the button to get started.
				</p>
				<Link href="/movies" Link>
					<CustomButton
						title={"GET STARTED"}
						color="text-white"
						bgColor="bg-indigo-950"
					/>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
