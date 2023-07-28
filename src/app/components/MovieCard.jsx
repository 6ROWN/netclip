"use client";
import Image from "next/image";
import React, { useState } from "react";
import { baseUrl } from "@/app/constants/movie";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MovieCard = ({ movie }) => {
	const [imageError, setImageError] = useState(false);
	const router = useRouter();

	const handleImageError = () => {
		setImageError(true);
	};

	const handleNavigation = () => {
		router.push(`/movies/${movie?.id}`);
	};

	return (
		<div
			onClick={handleNavigation}
			// href={`/movies/${movie?.id}`}
			className="min-w-[250px] h-[300px]"
		>
			{!imageError ? (
				<Image
					src={`${baseUrl}${movie?.poster_path}`}
					width={100}
					height={100}
					alt="movie-poster"
					className="h-full w-full rounded-lg transform delay-200 ease-in hover:scale-110 cursor-pointer"
					onError={handleImageError}
				/>
			) : (
				<Image
					src={`/theatre.jpg`}
					width={100}
					height={100}
					alt="movie-poster"
					className="h-full w-full rounded-lg transform delay-200 ease-in hover:scale-110 cursor-pointer"
				/>
			)}
		</div>
	);
};

export default MovieCard;
