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
	}, []);

	const handleThemeChange = () => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div className="inline-flex space-x-8 text-2xl cursor-pointer hover:text-blue-700">
			{mounted && (
				<div
					className="flex space-x-4 justify-center items-center"
					onClick={handleThemeChange}
				>
					<span className="text-sm">
						{currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
					</span>
					{currentTheme === "dark" ? (
						<MdLightMode size={20} />
					) : (
						<BsFillMoonFill size={20} />
					)}
				</div>
			)}
		</div>
	);
};

export default DarkModeSwitch;
