import Image from "next/image";
import React from "react";
import { baseUrl } from "@/constants/movie";
import MovieDetailsIcon from "./MovieDetailsIcon";

const MovieDetails = ({ movie }) => {
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
						<div className="mx-auto shadow-lg w-[300px] h-[400px] drop-shadow-2xl hidden md:block cursor-pointer">
							<Image
								src={`${baseUrl}${
									movie?.backdrop_path || movie?.poster_path
								}`}
								width={100}
								height={100}
								className="object-cover w-full h-full rounded-xl hidden md:block shadow-white opacity-100 hover:opacity-50 transition-opacity duration-300"
							/>
						</div>
						<div className=" m-auto space-y-4 md:space-y-8 text-white custom-shadow  ">
							<section className="inline-flex items-center space-x-8">
								<h1 className="md:text-2xl">{movie?.title}</h1>
								<h1 className="md:text-2xl">
									{`(${new Date(
										movie?.release_date
									).getFullYear()})`}
								</h1>
							</section>
							<section className="space-x-4">
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
								<MovieDetailsIcon />
							</section>
							<section>
								<h2 className="italic">{movie?.tagline}</h2>
							</section>
							<section>
								<h1>
									<em>Overview</em>
								</h1>
								<h2 className="leading-8">{movie?.overview}</h2>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
