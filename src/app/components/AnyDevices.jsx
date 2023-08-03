"use client";
import React, { useState, useEffect } from "react";
import { FiMonitor } from "react-icons/fi";
import { BsAndroid2, BsApple, BsXbox, BsMicrosoft } from "react-icons/bs";
import { SiSamsung, SiPlaystation } from "react-icons/si";

const devices = [
	{
		id: 1,
		icon: <FiMonitor size={28} className="mx-auto" />,
		description: "Mac and PC",
	},
	{
		id: 2,
		icon: <BsAndroid2 size={28} className="mx-auto" />,
		description: "Phone, Tablet & Android",
	},
	{
		id: 3,
		icon: <BsApple size={28} className="mx-auto" />,
		description: "Iphone, Ipad & Selected Apple Devices",
	},
	{
		id: 4,
		icon: <BsXbox size={28} className="mx-auto" />,
		description: "Xbox one, One S & One X",
	},
	{
		id: 5,
		icon: <SiSamsung size={32} className="mx-auto" />,
		description: "Selected TV Models",
	},
	{
		id: 6,
		icon: <BsMicrosoft size={28} className="mx-auto" />,
		description: "Surface & Windows Partner Devices",
	},
	{
		id: 7,
		icon: <SiPlaystation size={28} className="mx-auto" />,
		description: "Play Station VR ",
	},
];

const AnyDevices = () => {
	const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentLogoIndex(
				(prevIndex) => (prevIndex + 1) % devices.length
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [devices.length]);

	return (
		<div className="p-12 mx-auto">
			<h1 className="text-center text-2xl sm:text-4xl  font-black pb-8">
				WATCH ON ANY SCREEN YOU LIKE
			</h1>
			<p className="text-center pb-10">
				Stream on your laptop or download on your mobile, tablet and
				smartTV to watch all your favorite movies{" "}
			</p>

			<section className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 text-center text-white overflow-hidden ">
				{devices.map((item, index) => (
					<div
						key={item.id}
						className={`bg-indigo-950 py-8 px-2 w-full md:w-[130px] h-auto md:h-[130px] border-b-2 border-gray-200 ${
							currentLogoIndex === index ? "bg-indigo-900" : ""
						}`}
					>
						<div className="mb-4">{item.icon}</div>
						<h3 className=" text-xs font-light">
							{item.description}
						</h3>
					</div>
				))}
			</section>
		</div>
	);
};

export default AnyDevices;
