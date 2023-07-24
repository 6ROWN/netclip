import React from "react";
import { BASE_URL, API_KEY } from "@/app/utils/requests";
import MovieDetails from "@/app/components/MovieDetails";
import Cast from "@/app/components/Cast";
import Crew from "@/app/components/Crew";

const getMovie = async (movieId) => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
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
			{credits.cast.length > 1 && <Cast casts={credits.cast} />}
			{credits.crew.length > 1 && <Crew crews={credits.crew} />}
		</div>
	);
};

export default page;
