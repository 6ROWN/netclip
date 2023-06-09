import React from "react";

const CustomButton = ({ title }) => {
	return (
		<div className="py-4 px-8 rounded bg-indigo-700 cursor-pointer font-semibold text-white">
			{title}
		</div>
	);
};

export default CustomButton;
