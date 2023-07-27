"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { baseUrl } from "@/app/constants/movie";
import { AiFillStar } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { useRouter } from "next/navigation";

const Banner = ({ netflixOriginals }) => {
	const [movie, setMovie] = useState(null);
	const [imageError, setImageError] = useState(false);
	const router = useRouter();

	const handleImageError = () => {
		setImageError(true);
	};

	useEffect(() => {
		setMovie(
			netflixOriginals.results[
				Math.floor(Math.random() * netflixOriginals.results.length)
			]
		);
	}, [netflixOriginals]);

	return (
		<div className="w-full h-screen">
			<div className="relative">
				{!imageError ? (
					<Image
						src={`${baseUrl}${
							movie?.backdrop_path || movie?.poster_path
						}`}
						alt="Random image for showcase banner"
						width={500}
						height={500}
						className=" object-cover w-full h-screen"
						priority
						onError={handleImageError}
						placeholder="blur"
						blurDataURL={"/theatre.jpg"}
					/>
				) : (
					<Image
						src={`/theatre.jpg`}
						width={100}
						height={100}
						alt="movie-poster"
						className="h-full w-full rounded-lg transform delay-200 ease-in hover:scale-110"
					/>
				)}

				<div className="absolute top-0 left-0 flex justify-center flex-col md:h-[80vh] h-screen px-8 md:px-16 gap-12 md:gap-8 text-white custom-shadow text-center md:text-left">
					<h1 className="text-2xl md:text-4xl uppercase">
						{movie?.original_title || movie?.title}
					</h1>
					<div className="flex flex-row items-center justify-center md:justify-start gap-x-8">
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
					<h2 className="md:w-3/5 w-full  md:leading-10 leading-8 truncate-3-lines md:truncate-4-lines ">
						{movie?.overview}
					</h2>
					<div className="flex flex-col gap-y-6 md:flex-row md:gap-x-8">
						<div
							className="flex justify-center space-x-3 items-center py-4 px-8 bg-gray-200 rounded text-gray-900 drop-shadow-lg border border-gray-200 cursor-pointer hover:bg-transparent hover:text-gray-200 hover:custom-shadow font-bold white-shadow "
							onClick={() => router.push(`movies/${movie?.id}`)}
						>
							<span> PLAY</span> <BiPlayCircle size={24} />
						</div>
						<div className="flex justify-center items-center space-x-3 py-4 px-8 border border-gray-200 rounded drop-shadow-lg cursor-pointer hover:bg-gray-200 hover:text-gray-900 hover:white-shadow font-bold">
							<span>WATCH LATER</span>
							<MdOutlineWatchLater size={24} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
