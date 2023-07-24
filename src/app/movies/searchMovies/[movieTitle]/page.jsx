import React from "react";
import { BASE_URL, API_KEY } from "@/app/utils/requests";
import MovieRow from "@/app/components/MovieRow";

const getSearchMovie = async (movieTitle) => {
	try {
		const response = await fetch(
			`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieTitle}`
		);
		const results = await response.json();
		return results;
	} catch (error) {
		console.log("error fetching");
	}
};

const page = async ({ params: { movieTitle } }) => {
	const movie = await getSearchMovie(movieTitle);

	return (
		<div className="p-4">
			<MovieRow title={movieTitle} movies={movie} />
		</div>
	);
};

export default page;
