import React from "react";
import CustomButton from "./CustomButton";
const Hero = () => {
	return (
		<div
			className={`bg-[url("/hero-img.jpg")] bg-cover bg-no-repeat h-screen brightness-50`}
		>
			<div className="flex flex-col items-center justify-center min-h-screen gap-[40px]">
				<h1 className="font-black text-3xl md:text-4xl text-white text-center">
					Unlimited movies, TV shows, and more
				</h1>
				<p className="text-lg font-medium  text-white">
					Ready to watch? Click the button to get started.
				</p>
				<CustomButton title={"GET STARTED"} />
			</div>
		</div>
	);
};

export default Hero;
