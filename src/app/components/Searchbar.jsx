"use client";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Searchbar = () => {
	const [query, setQuery] = useState();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!query) {
			console.log("nothing to render");
		} else {
			router.push(`/movies/searchMovies/${query}`);
			setQuery("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`relative items-center justify-center md:w-64`}
		>
			<input
				className="w-[100%] p-2 pl-10 outline-none border-none rounded-lg focus:ring-2 focus:border-gray-200 placeholder:text-gray-700 dark:placeholder:text-gray-200 placeholder:text-sm text-sm"
				placeholder="Search movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				className="absolute left-2 top-1/2 transform -translate-y-1/2 py-2"
				type="submit"
			>
				<BiSearch size={24} />
			</button>
		</form>
	);
};

export default Searchbar;
