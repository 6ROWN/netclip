import Image from "next/image";
import React from "react";
import { baseUrl } from "@/constants/movie";

const MovieDetails = ({ movie }) => {
	return (
		<div>
			<div className="w-full h-screen relative">
				<Image
					src={`${baseUrl}${
						movie?.backdrop_path || movie?.poster_path
					}`}
					width={100}
					height={100}
					className="w-full h-full bg-blend-difference"
				/>
				<div className="absolute top-0 left-0 flex justify-center flex-col h-4/5 px-20 ">
					<div className="flex flex-col md:flex-row gap-16">
						<div className="shadow-lg w-[300px] h-[400px] drop-shadow-2xl">
							<Image
								src={`${baseUrl}${
									movie?.backdrop_path || movie?.poster_path
								}`}
								width={100}
								height={100}
								className="w-full h-full rounded-xl hidden md:block"
							/>
						</div>
						<div className="md:w-[50%] m-auto space-y-4 md:space-y-8 text-white custom-shadow  ">
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
									{`${movie?.release_date} (${movie?.production_companies[0].origin_country})`}
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
								<h2 className="italic">{movie?.tagline}</h2>
							</section>
							<section>
								<h1>
									<em>Overview</em>
								</h1>
								<h2 className="leading-8">{movie?.overview}</h2>
							</section>
							<section></section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
