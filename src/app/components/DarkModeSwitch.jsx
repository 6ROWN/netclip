"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => {
		setMounted(true);
	});

	return (
		<div className="inline-flex space-x-8 text-2xl cursor-pointer hover:text-blue-700">
			{mounted && currentTheme === "dark" ? (
				<div
					className="flex space-x-4 justify-center items-center"
					onClick={() => setTheme("light")}
				>
					<span className="text-sm">Light Mode</span>
					<MdLightMode size={20} />
				</div>
			) : (
				<div
					className="flex space-x-4 justify-center items-center"
					onClick={() => setTheme("dark")}
				>
					<span className="text-sm">Dark Mode</span>
					<BsFillMoonFill size={20} />
				</div>
			)}
		</div>
	);
};

export default DarkModeSwitch;
