"use client";
import Image from "next/image";
import React, { useState } from "react";
import { baseUrl } from "@/constants/movie";
import MovieDetailsIcon from "./MovieDetailsIcon";
import { BiExpand } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Modal from "./Modal";

const MovieDetails = ({ movie }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<div className="w-full h-[70vh] relative">
				<Image
					src={`${baseUrl}${
						movie?.backdrop_path || movie?.poster_path
					}`}
					width={100}
					height={100}
					className="w-full h-full object-cover "
				/>
				<div className="h-full absolute top-0 left-0 flex items-center justify-center">
					<div className="px-20 grid grid-rows md:grid-cols-2 ">
						<div className="">
							<div
								className="group relative mx-auto shadow-lg w-[300px] h-[400px] drop-shadow-2xl hidden md:block cursor-pointer"
								onClick={openModal}
							>
								<Image
									src={`${baseUrl}${
										movie?.backdrop_path ||
										movie?.poster_path
									}`}
									width={100}
									height={100}
									className="object-cover w-full h-full rounded-xl hidden md:block shadow-white opacity-100 hover:opacity-50 transition-opacity duration-300"
								/>
								<div className="opacity-0  group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center inline-flex ">
									<BiExpand className="text-2xl mr-2" />
									<span>Expand</span>
								</div>
							</div>
						</div>
						<div className=" m-auto space-y-4 md:space-y-8 text-white custom-shadow  ">
							<section className="inline-flex space-x-8">
								<h1 className="md:text-2xl">{movie?.title}</h1>
								<h1 className="md:text-2xl">
									{`(${new Date(
										movie?.release_date
									).getFullYear()})`}
								</h1>
							</section>
							<section className="space-x-4 hidden">
								<span>
									{`${movie?.release_date} (${movie?.production_companies[0]?.origin_country})`}
								</span>
								{/* Genres */}
								<span>
									[
									{movie?.genres.map((genre) => (
										<span className="mr-2">
											{genre.name}
										</span>
									))}
									]
								</span>
								{/* Runtime */}
								<span>{`${Math.floor(movie?.runtime / 60)}hrs ${
									movie?.runtime % 60
								}mins `}</span>
							</section>
							<section>
								<MovieDetailsIcon movieId={movie?.id} />
								<div
									className="inline-flex space-x-4 ml-8 cursor-pointer"
									onClick={openModal}
								>
									<FaPlay className="text-2xl" />
									<span>Play Trailer</span>
								</div>
							</section>
							<section>
								<h2 className="italic">{movie?.tagline}</h2>
							</section>
							<section>
								<h1 className="underline font-bold">
									Overview
								</h1>
								<h2 className="leading-10 text-sm md:text-base  truncate-4-lines overflow-hidden">
									{movie?.overview}
								</h2>
							</section>
							<section>
								{isOpen && (
									<Modal
										closeModal={closeModal}
										movieId={movie.id}
									/>
								)}
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
