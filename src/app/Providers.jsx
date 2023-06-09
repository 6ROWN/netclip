"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<div
				className={`dark:bg-gray-900 dark:text-gray-200 text-gray-700 min-h-screen transition-colors duration-300 select-none`}
			>
				{children}
			</div>
		</ThemeProvider>
	);
};

export default Providers;
