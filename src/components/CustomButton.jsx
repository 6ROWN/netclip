import React from "react";

const CustomButton = ({ title, color, type }) => {
	return (
		<button
			type={type}
			className={` ${color} py-4 px-8 rounded cursor-pointer font-semibold first-line:text-white hover:brightness-200`}
		>
			{title}
		</button>
	);
};

export default CustomButton;
