"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "@/app/config/firebase";
import DarkModeSwitch from "./DarkModeSwitch";
import { MdSettings, MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const NavPanel = () => {
	const { data: session } = useSession();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="p-4 md:px-20 flex flex-col md:flex-row justify-between items-center overflow-hidden">
			<section className="mb-4 md:mb-0">
				<Logo />
			</section>
			<section className="flex items-center justify-center">
				<div className="flex items-center justify-center space-x-8">
					<div className="text-gray-200 text-sm md:text-base hover:text-gray-700">
						<Link href={"/movies"}>Movies</Link>
					</div>
					<Searchbar />
					<div className="" onClick={handleToggle}>
						<div className="cursor-pointer flex items-center justify-center group">
							<button className="">
								{session?.user?.image ? (
									<Image
										src={session?.user?.image}
										width={50}
										height={50}
										alt="user-image"
										className="rounded-full w-10 h-10 group-hover:border-2 group-hover:border-gray-200"
									/>
								) : (
									<FaUserCircle size={28} />
								)}
							</button>
							<FiChevronDown size={18} color="#fff" />
						</div>

						{isOpen && (
							<div className="absolute right-10 top-[130px] md:top-20 z-20 dark:bg-gray-700 bg-gray-200 rounded-lg drop-shadow-lg">
								<ul className="w-64 p-4 flex flex-col items-center space-y-4 dark:text-gray-200 text-gray-700 text-sm ">
									{session?.user?.image && (
										<Image
											src={session?.user?.image}
											width={50}
											height={50}
											alt="user-image"
											className="rounded-full w-16 h-16"
										/>
									)}
									{session?.user?.name ? (
										<li className="hover:text-indigo-700">
											{session?.user?.name}
										</li>
									) : (
										<li className="">
											{session?.user?.email}
										</li>
									)}

									<li className="flex justify-center items-center space-x-10 cursor-pointer hover:text-indigo-700">
										<span>Setting</span>
										<MdSettings size={20} />
									</li>
									<li>
										<DarkModeSwitch />
									</li>
									<li
										className=" cursor-pointer flex justify-center items-center space-x-10 hover:text-indigo-700"
										onClick={() => signOut(auth)}
									>
										<span>Logout</span>
										<MdOutlineLogout size={20} />
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</section>
		</nav>
	);
};

export default NavPanel;
