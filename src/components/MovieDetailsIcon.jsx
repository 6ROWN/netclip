"use client";
import React from "react";
import { TbListDetails, TbHeartPlus, TbBookmark } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

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
		<div className="inline-flex space-x-4 md:space-x-8">
			{Info.map((info) => (
				<div>
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
			<Link href="" className="inline-flex space-x-4">
				<FaPlay className="text-2xl" />
				<span>Play Trailer</span>
			</Link>
		</div>
	);
};

export default MovieDetailsIcon;
