"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";
import { AiFillStar } from "react-icons/ai";
import CustomButton from "./CustomButton";

const Banner = ({ netflixOriginals }) => {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		setMovie(
			netflixOriginals.results[
				Math.floor(Math.random() * netflixOriginals.results.length)
			]
		);
	}, [netflixOriginals]);

	return (
		<div className="w-full md:h-3/4 h-screen">
			<div className="relative">
				<Image
					src={`${baseUrl}${
						movie?.backdrop_path || movie?.poster_path
					}`}
					alt="Random image for showcase banner"
					width={500}
					height={500}
					className=" object-cover w-full md:h-[80vh] h-screen"
				/>
				<div className="absolute top-0 left-0 flex justify-center flex-col md:h-[80vh] h-screen px-16 gap-12 md:gap-8 text-white custom-shadow">
					<h1 className=" text-2xl md:text-4xl uppercase">
						{movie?.original_title || movie?.title}
					</h1>
					<div className="flex flex-row items-center gap-x-8">
						<span className="p-1 bg-yellow-400 rounded text-gray-900 font-black text-sm">
							IMDb
						</span>
						<span className="inline-flex items-center">
							<AiFillStar className="text-yellow-400 text-lg" />{" "}
							<span className="text-sm ml-2">
								{movie?.vote_average} / 10
							</span>
						</span>
						<span className="flex items-center gap-x-1">
							<p className="w-2 h-2 bg-yellow-400 rounded-full border-2 border-white "></p>
							{new Date(movie?.release_date).getFullYear()}
						</span>
					</div>
					<h2 className="md:w-3/5 w-full  md:leading-10 leading-8">
						{movie?.overview}
					</h2>
					<div className="flex gap-x-8">
						<span>
							<CustomButton
								title={"Play Now"}
								color={"text-gray-900"}
								bgColor={"bg-slate-100"}
							/>
						</span>
						<span>
							<CustomButton
								title={"Add to wishlist"}
								color={"text-slate-100"}
								bgColor={"bg-transparent"}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
