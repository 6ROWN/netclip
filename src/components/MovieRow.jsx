"use client";
import React, { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "./MovieCard";

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
		<div className="py-8">
			<h1 className="pb-8 font-bold uppercase transition duration-200 hover:brightness-75 ease-in cursor-pointer">
				{title}
			</h1>
			<div className="group md:-ml-2 relative">
				<BsChevronLeft
					onClick={handlePrev}
					className={`${
						isMoved
							? "text-3xl absolute top-0 bottom-0 m-auto left-2  opacity-100 transition hover:scale-125 cursor-pointer font-bold z-20 white-shadow"
							: "hidden"
					}`}
				/>
				<section
					ref={carouselRef}
					className="flex space-x-8 overflow-x-auto scrollbar-hide items-center scroll-smooth"
				>
					{movies.results.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</section>
				<BsChevronRight
					onClick={handleNext}
					className="text-3xl absolute top-0 bottom-0 m-auto right-2 opacity-100 transition hover:scale-125 cursor-pointer font-bold white-shadow z-20"
				/>
			</div>
		</div>
	);
};

export default MovieRow;
