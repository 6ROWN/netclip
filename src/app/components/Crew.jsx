"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { baseUrl } from "@/app/constants/movie";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Crew = ({ crews }) => {
	const carouselRef = useRef(null);
	const [isMoved, setIsMoved] = useState(false);

	const handleNext = () => {
		carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
		setIsMoved(true);
	};

	const handlePrev = () => {
		carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
	};

	return (
		<main className="p-12">
			<h1 className="pb-8">Crew Members</h1>
			<div className="relative">
				<BsChevronLeft
					onClick={handlePrev}
					className={`${
						isMoved
							? "text-3xl absolute top-0 bottom-0 m-auto left-2  opacity-100 transition hover:scale-125 cursor-pointer font-bold z-20 white-shadow text-white"
							: "hidden"
					}`}
				/>
				<section
					ref={carouselRef}
					className="flex flex-row overflow-x-auto space-x-8 scrollbar-hide items-center scroll-smooth"
				>
					{crews.map((crew) => {
						const profilePath = crew.profile_path
							? `${baseUrl}${crew.profile_path}`
							: "/person.jpg";

						return (
							<div className="min-h-[300px] w-[180px]">
								<Image
									src={profilePath}
									width={100}
									height={100}
									alt="crew-photo"
									className="min-w-[180px] h-[200px] rounded-tl rounded-tr"
								/>
								<div className="flex flex-col justify-center items-center h-[80px] bg-indigo-950 text-gray-200 dark:bg-gray-200 dark:text-gray-700 pb-2">
									<h3 className="text-sm text-center py-2 font-bold">
										{crew?.name}
									</h3>
									<h4 className="text-xs text-center">
										{crew?.job}
									</h4>
								</div>
							</div>
						);
					})}
				</section>
				<BsChevronRight
					onClick={handleNext}
					className="text-3xl absolute top-0 bottom-0 m-auto right-2 opacity-100 transition hover:scale-125 cursor-pointer font-bold white-shadow z-20 text-white"
				/>
			</div>
		</main>
	);
};

export default Crew;
