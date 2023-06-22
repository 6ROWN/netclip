import React from "react";
import requests from "../../utils/requests";
import Banner from "@/components/Banner";

const page = async () => {
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
		</div>
	);
};

export default page;
