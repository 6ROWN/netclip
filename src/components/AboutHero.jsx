import React from "react";
import Image from "next/image";

const AboutHero = () => {
	return (
		<div className=" p-16">
			<div className="grid gap-8 md:grid-cols-2  items-center ">
				<div className="text-center">
					<h1 className="font-black text-3xl md:text-4xl text-center mb-8">
						Enjoy your TV.
					</h1>
					<p className="text-base md:text-xl">
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
						TV, Blu-ray players, and more
					</p>
				</div>
				<Image
					src={"/tv.jpg"}
					alt="hero"
					width={500}
					height={500}
					className="rounded"
				/>
			</div>
		</div>
	);
};

export default AboutHero;
