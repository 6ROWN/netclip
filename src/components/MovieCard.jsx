import Image from "next/image";
import React from "react";
import { baseUrl } from "@/constants/movie";

const MovieCard = ({ movie }) => {
	return (
		<div className="transform delay-200 ease-in hover:scale-110">
			<Image
				src={`${baseUrl}${movie?.poster_path}`}
				width={100}
				height={100}
				className="min-w-[250px] h-[300px] rounded-lg"
			/>
		</div>
	);
};

export default MovieCard;
