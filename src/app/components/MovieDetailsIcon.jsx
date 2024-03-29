"use client";
import React from "react";
import { TbListDetails, TbHeartPlus, TbBookmark } from "react-icons/tb";
import { BiStar } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

const Info = [
	{
		icons: <TbListDetails />,
		text: "Add to list",
	},
	{
		icons: <TbHeartPlus />,
		text: "Mark as favorite",
	},
	{
		icons: <TbBookmark />,
		text: "Add to your watchlist",
	},
	{
		icons: <BiStar />,
		text: "Rate It!",
	},
];

const MovieDetailsIcon = () => {
	return (
		<div className="hidden md:inline-flex space-x-12">
			{Info.map((info, index) => (
				<div key={index}>
					<span
						data-tooltip-id="my-tooltip"
						data-tooltip-content={info.text}
						data-tooltip-place="bottom"
						className="text-2xl cursor-pointer"
					>
						{info.icons}
					</span>
					<Tooltip id="my-tooltip" />
				</div>
			))}
		</div>
	);
};

export default MovieDetailsIcon;
