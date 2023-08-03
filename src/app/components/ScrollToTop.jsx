"use client";
import { useState, useEffect } from "react";
import { TfiMouse } from "react-icons/tfi";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Check if the user has scrolled down enough to show the "Scroll to Top" button
	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop;
		setIsVisible(scrolled > 300);
	};

	// Scroll the page to the top when the button is clicked
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`${
				isVisible ? "block" : "hidden"
			} fixed bottom-10 right-10 p-4 rounded-full bg-indigo-900 hover:bg-indigo-950 text-white shadow-md`}
		>
			<div>
				<BsChevronUp size={20} />
				<TfiMouse size={20} />
			</div>
		</button>
	);
};

export default ScrollToTop;
