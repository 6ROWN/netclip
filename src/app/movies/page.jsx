"use client";
import React from "react";
import requests from "../utils/requests";
import Banner from "@/app/components/Banner";
import MovieRow from "@/app/components/MovieRow";

const page = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const [
		trending,
		netflixOriginals,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchTrending).then((response) => response.json()),
		fetch(requests.fetchNetflixOriginals).then((response) =>
			response.json()
		),
		fetch(requests.fetchTopRated).then((response) => response.json()),
		fetch(requests.fetchActionMovies).then((response) => response.json()),
		fetch(requests.fetchComedyMovies).then((response) => response.json()),
		fetch(requests.fetchHorrorMovies).then((response) => response.json()),
		fetch(requests.fetchRomanceMovies).then((response) => response.json()),
		fetch(requests.fetchDocumentaries).then((response) => response.json()),
	]);

	// console.log(netflixOriginals);

	return (
		<div>
			{/* Banner - Showcase section */}
			<Banner netflixOriginals={netflixOriginals} />
			{/* Display the movies in a carousel */}
			<section className="p-12">
				<MovieRow title="Trending" movies={trending} />
				<MovieRow title="top Rated" movies={topRated} />
				<MovieRow title="Action" movies={actionMovies} />
				<MovieRow title="Comedy" movies={comedyMovies} />
				<MovieRow title="Horror" movies={horrorMovies} />
				<MovieRow title="Romance" movies={romanceMovies} />
				<MovieRow title="Documentaries" movies={documentaries} />
			</section>
		</div>
	);
};

export default page;
