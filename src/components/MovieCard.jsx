import Image from "next/image";
import React from "react";
import { baseUrl } from "@/constants/movie";
import Link from "next/link";

const MovieCard = ({ movie }) => {
	return (
		<Link
			href={`movies/${movie?.id}`}
			className="min-w-[250px] h-[300px] cursor-pointer"
		>
			<Image
				src={`${baseUrl}${movie?.poster_path}`}
				width={100}
				height={100}
				className="h-full w-full rounded-lg transform delay-200 ease-in hover:scale-110"
			/>
		</Link>
	);
};

export default MovieCard;
