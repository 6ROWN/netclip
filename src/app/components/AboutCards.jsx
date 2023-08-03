"use client";
import React, { useRef, useState, useEffect } from "react";
import { VscDesktopDownload } from "react-icons/vsc";
import { MdPhonelinkRing } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { SiPremierleague, SiBbc } from "react-icons/si";
import { GiDiamondTrophy } from "react-icons/gi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const AboutCards = () => {
	const carouselRef = useRef(null);

	const handleNext = () => {
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
	};

	const handlePrev = () => {
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
	};

	return (
		<div className="p-12 max-w-[90%]  mx-auto relative">
			{/* Handle prev carousel button */}
			<div
				onClick={handlePrev}
				className="m-auto absolute left-0 md:left-[-30px] top-1/2 transform -translate-y-1/2 p-2 bg-indigo-950 text-white rounded-full cursor-pointer"
			>
				<span>
					<BsChevronLeft
						className="font-black dark:text-white text-gray-700 "
						size={18}
						color="#FFF"
					/>
				</span>
			</div>
			{/* Handle next carousel button */}
			<div
				onClick={handleNext}
				className="absolute right-0 md:right-[-30px] top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full cursor-pointer bg-indigo-950"
			>
				<span>
					<BsChevronRight
						className="font-black dark:text-white text-gray-700 "
						size={18}
						color="#FFF"
					/>
				</span>
			</div>
			<section
				ref={carouselRef}
				className="flex space-x-8 md:space-x-12 overflow-x-auto text-center items-center scroll-smooth scrollbar-hide "
			>
				{services.map((service) => (
					<div
						key={service.id}
						className="border-4 border-indigo-950 rounded-lg p-8 min-w-[250px] md:min-w-[350px] h-[250px] md:h-[210px]  "
					>
						<div className="mx-auto">{service.icon}</div>
						<h3 className="py-4 font-bold"> {service.title}</h3>
						<p className="text-sm">{service.description}</p>
					</div>
				))}
			</section>
		</div>
	);
};

export default AboutCards;

const services = [
	{
		id: 1,
		icon: <VscDesktopDownload size={32} className="mx-auto" />,
		title: "Download your shows to watch offline",
		description:
			"Save your favorites easily and always have something to watch",
	},
	{
		id: 2,
		icon: <MdPhonelinkRing size={32} className="mx-auto" />,
		title: "Watch everywhere",
		description:
			"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
	},
	{
		id: 3,
		icon: <TbMoodKid size={32} className="mx-auto" />,
		title: "Create profiles for kids",
		description:
			"Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
	},

	{
		id: 4,
		icon: <SiBbc size={32} className="mx-auto" />,
		title: "Breaking News",
		description:
			"Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
	},
	{
		id: 5,
		icon: <SiPremierleague size={32} className="mx-auto" />,
		title: "Live Sports",
		description:
			"Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
	},
	{
		id: 6,
		icon: <GiDiamondTrophy size={32} className="mx-auto" />,
		title: "Biggest Events",
		description:
			"Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
	},
];
