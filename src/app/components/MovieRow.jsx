"use client";
import React, { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "./MovieCard";
import { useRouter } from "next/navigation";

const MovieRow = ({ title, movies }) => {
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
		<>
			{movies && movies.results.length > 0 ? (
				<div className="p-8">
					<h1 className="pb-8 font-bold uppercase transition duration-200 hover:brightness-75 ease-in cursor-pointer">
						{title}
					</h1>
					<div className="group md:-ml-2 relative">
						<div
							onClick={handlePrev}
							className={`${
								isMoved
									? " flex justify-center items-center p-4 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 text-3xl absolute top-0 bottom-0 m-auto left-2  opacity-100 transition hover:scale-125 cursor-pointer font-bold z-20 white-shadow"
									: "hidden"
							}`}
						>
							<span>
								<BsChevronLeft
									className="font-black dark:text-white text-gray-700 "
									size={18}
								/>
							</span>
						</div>

						<section
							ref={carouselRef}
							className="flex space-x-8 overflow-x-auto scrollbar-hide items-center scroll-smooth"
						>
							{movies.results.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</section>
						<div
							onClick={handleNext}
							className=" flex justify-center items-center p-4 bg-gray-200 dark:bg-gray-700 absolute top-0 bottom-0 right-2 m-auto  h-4 w-4 rounded-full transition hover:scale-125 cursor-pointer font-bold white-shadow z-20 drop-shadow-xl"
						>
							<span>
								<BsChevronRight
									className="font-black dark:text-white text-gray-700 "
									size={18}
								/>
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center flex-col h-[70vh]">
					<div>Could not find movie</div>
				</div>
			)}
		</>
	);
};

export default MovieRow;
