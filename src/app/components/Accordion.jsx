"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdRemove } from "react-icons/md";

const accordionData = [
	{
		title: "What is NetClip",
		description:
			"NetClip is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
	},
	{
		title: "How much does it cost",
		description:
			"Watch NetClip on your smartphone, tablet, Smart TV, laptop, or streaming device, all for free.",
	},
	{
		title: "Where can I watch NetClip",
		description:
			"Watch anywhere, anytime. Sign in to watch instantly on the web at netClip.com from your personal computer or on any internet-connected device that offers the NetClip app, including smart TVs, smartphones, tablets, streaming media players and game consoles.	You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection.",
	},
	{
		title: "Is NetClip good for kids",
		description:
			"The NetClip Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
	},
	{
		title: "What can I watch on NetClip",
		description:
			"NetClip has an extensive library of feature films, documentaries, TV shows, anime, award-winning NetClip originals, and more. Watch as much as you want, anytime you want.",
	},
];

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) =>
		setActiveIndex((prevIndex) => (prevIndex == index ? null : index));

	return (
		<section className="p-12">
			<h1 className="text-center text-2xl sm:text-4xl  font-black pb-8">
				FREQUENTLY ASKED QUESTIONS
			</h1>
			<div className="max-w-[80%] mx-auto">
				{accordionData.map((data, index) => (
					<div key={index} className="pb-2">
						<button
							onClick={() => toggle(index)}
							className="min-w-full bg-indigo-950 p-6  flex justify-between hover:brightness-75"
						>
							<h1 className="text-lg text-gray-200">
								{data.title}
							</h1>
							<span>
								{activeIndex === index ? (
									<MdRemove className="text-xl text-gray-200" />
								) : (
									<AiOutlinePlus className="text-2xl text-gray-200" />
								)}
							</span>
						</button>

						{activeIndex === index && (
							<p className="bg-blue-950 p-6 border-t border-gray-200 text-gray-200 text-base">
								{data.description}
							</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Accordion;
