"use client";
import React, { useState } from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const navItems = [
	{
		item: "Movies",
		link: "/movies",
	},
	{
		item: "About",
		link: "/about",
	},
	{
		item: "Contact",
		link: "/",
	},
	{
		item: "Privacy",
		link: "/",
	},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuToggler = () => {
		setIsOpen((previousState) => !previousState);
	};

	return (
		<nav className={`py-4 px-8 overflow-hidden`}>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
				<div>
					<Link
						href={"/"}
						className="text-white font-bold text-lg tracking-widest bg-blue-700 p-1 rounded hover:bg-white hover:text-blue-700"
					>
						<span className="">NET</span>
						<span className="text-indigo-950">CLIP</span>
					</Link>
				</div>
				<ul
					className={` md:flex md:space-x-7 md:items-center md:w-auto h-screen md:h-10 md:m-auto absolute md:static md:z-auto z-10 bg-indigo-950 w-full top-[60px] py-8 md:py-0 transition-all delay-300 ease-in ${
						isOpen ? "left-0" : "left-full"
					}`}
				>
					{navItems.map((item) => (
						<div
							key={item.item}
							className="flex items-center justify-center mb-6 md:mb-0"
						>
							<Link
								href={item.link}
								className="text-gray-200 hover:text-blue-500"
							>
								{item.item}
							</Link>
						</div>
					))}
				</ul>
				{/* Dark mode switcher */}
				<div className="hidden md:block ">
					<DarkModeSwitch />
				</div>
			</div>
			{/* Toggle icon */}
			<div
				onClick={menuToggler}
				className="text-gray-200 text-lg md:hidden absolute top-5 right-5 cursor-pointer"
			>
				{isOpen ? <FaTimes /> : <AiOutlineMenu />}
			</div>
		</nav>
	);
};

export default Navbar;
