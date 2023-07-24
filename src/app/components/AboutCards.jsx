import React from "react";
import { VscDesktopDownload } from "react-icons/vsc";
import { MdPhonelinkRing } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";

const AboutCards = () => {
	return (
		<div className="p-12 max-w-[85%] mx-auto">
			<div className="grid grid-col-1 sm:grid-cols-3 gap-12 text-center ">
				<div className="border-4 border-indigo-950 rounded-lg p-8 w-full ">
					<VscDesktopDownload className="w-16 h-16 mx-auto" />
					<h3 className="py-4 font-bold">
						Download your shows to watch offline
					</h3>
					<p className="text-sm">
						Save your favorites easily and always have something to
						watch.
					</p>
				</div>
				<div className="border-4 border-indigo-950 rounded-lg p-8 w-full ">
					<MdPhonelinkRing className="w-16 h-16 mx-auto" />
					<h3 className="py-4 font-bold">Watch everywhere</h3>
					<p className="text-sm">
						Stream unlimited movies and TV shows on your phone,
						tablet, laptop, and TV.
					</p>
				</div>
				<div className="border-4 border-indigo-950 rounded-lg p-8 w-full ">
					<TbMoodKid className="w-16 h-16 mx-auto" />
					<h3 className="py-4 font-bold">Create profiles for kids</h3>
					<p className="text-sm">
						Send kids on adventures with their favorite characters
						in a space made just for them—free with your membership.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutCards;
