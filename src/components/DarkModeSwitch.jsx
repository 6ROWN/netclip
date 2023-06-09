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
				<MdLightMode onClick={() => setTheme("light")} className="" />
			) : (
				<BsFillMoonFill
					onClick={() => setTheme("dark")}
					className="text"
				/>
			)}
		</div>
	);
};

export default DarkModeSwitch;
