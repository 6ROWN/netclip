import React from "react";

const CustomButton = ({ title, color, type, bgColor }) => {
	return (
		<button
			type={type}
			className={` ${color} ${
				bgColor === "bg-transparent"
					? `border border-${color} hover:bg-white hover:text-gray-900`
					: bgColor
			} py-4 px-8 rounded cursor-pointer font-semibold hover:brightness-200 transition-colors ease-in`}
		>
			{title}
		</button>
	);
};

export default CustomButton;
