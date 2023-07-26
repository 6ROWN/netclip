"use client";
import Image from "next/image";
import React, { useState } from "react";
import { baseUrl } from "@/app/constants/movie";
import Link from "next/link";

const MovieCard = ({ movie }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<Link
			href={`movies/${movie?.id}`}
			className="min-w-[250px] h-[300px] cursor-pointer"
		>
			{!imageError ? (
				<Image
					src={`${baseUrl}${movie?.poster_path}`}
					width={100}
					height={100}
					alt="movie-poster"
					className="h-full w-full rounded-lg transform delay-200 ease-in hover:scale-110"
					onError={handleImageError}
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
		</Link>
	);
};

export default MovieCard;
