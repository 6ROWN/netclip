import React from "react";
import { BASE_URL, API_KEY } from "@/utils/requests";
import MovieDetails from "@/components/MovieDetails";
import Cast from "@/components/Cast";

const getMovie = async (movieId) => {
	const response = await fetch(
		`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
	);
	//https://api.themoviedb.org/3/movie/{movie_id}/credits
	const response2 = await fetch(
		`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
	);
	const movie = await response.json();
	const credits = await response2.json();

	return { movie, credits };
};

const page = async ({ params: { movieId } }) => {
	const { movie, credits } = await getMovie(movieId);

	//console.log(credits);
	return (
		<div>
			<MovieDetails movie={movie} />
			<Cast casts={credits.cast} />
		</div>
	);
};

export default page;
