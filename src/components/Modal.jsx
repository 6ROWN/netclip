"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BASE_URL } from "@/utils/requests";
import { API_KEY } from "@/utils/requests";
import { Tooltip } from "react-tooltip";

const Modal = ({ closeModal, movieId }) => {
	const [trailerKey, setTrailerKey] = useState(null);

	useEffect(() => {
		const fetchTrailer = async () => {
			try {
				const response = await fetch(
					`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
				);

				const results = await response.json();

				const trailer = results.results.find(
					(video) =>
						video.type === "Trailer" && video.site === "YouTube"
				);

				if (trailer) {
					setTrailerKey(trailer.key);
				}
			} catch (error) {
				console.error("Error fetching trailer:", error);
			}
		};

		fetchTrailer();
	}, [movieId]);

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="absolute inset-0 bg-gray-800 opacity-100"></div>
			<div className="bg-white rounded-lg p-4 w-[90%] md:w-[70%] h-[50vh] md:h-[90vh] relative">
				<button
					className=" absolute top-5 right-1/2 z-50 bg-white p-1 rounded-full text-2xl font-black text-red-500  hover:text-red-700"
					onClick={closeModal}
					data-tooltip-id="my-tooltip"
					data-tooltip-content={"Close"}
					data-tooltip-place="bottom"
				>
					<AiOutlineClose className="" />
				</button>
				<Tooltip id="my-tooltip" className="z-50" />
				{trailerKey ? (
					<div className=" h-full">
						<iframe
							title="movie-trailer"
							className="absolute top-0 left-0 w-full h-full"
							src={`https://www.youtube.com/embed/${trailerKey}`}
							sandbox="allow-scripts allow-same-origin"
							allowFullScreen
						></iframe>
					</div>
				) : (
					<div className="flex justify-center items-center h-full bg-slate-600">
						<p className="text-2xl font-bold">
							No trailer available.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
