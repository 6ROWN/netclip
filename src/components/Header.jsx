import React from "react";
import Link from "next/link";
import { TbMovie, TbInfoCircle } from "react-icons/tb";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
	return (
		<nav className="bg-indigo-950">
			<div className="py-6 lg:px-20 px-10">
				<ul className="flex justify-between items-center">
					<Link
						href={"/"}
						className="text-white font-bold text-lg tracking-widest bg-blue-700 p-1 rounded hover:bg-white hover:text-blue-700"
					>
						<span className="">NET</span>
						<span className="text-indigo-950">CLIP</span>
					</Link>
					<div className="text-white">
						<div className="inline-flex sm:hidden">
							<Link
								href={"/"}
								className="mr-12 text-2xl hover:text-blue-700"
							>
								<TbMovie />
							</Link>
							<Link
								href={""}
								className="text-2xl hover:text-blue-700"
							>
								<TbInfoCircle />
							</Link>
						</div>
						<div className="sm:inline hidden">
							<Link
								href={""}
								className="mr-12 hover:text-blue-700 font-bold"
							>
								MOVIES
							</Link>
							<Link
								href={""}
								className="hover:text-blue-700 font-bold"
							>
								ABOUT
							</Link>
						</div>
					</div>
					<DarkModeSwitch />
				</ul>
			</div>
		</nav>
	);
};

export default Header;
