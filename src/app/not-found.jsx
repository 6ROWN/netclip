"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Custom404 = () => {
	const router = useRouter();
	return (
		<div
			className={`flex justify-center items-center min-h-screen flex-col bg-[url('/no-signal.jpg')] bg-cover bg-no-repeat h-screen `}
		>
			<div class="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
			<div className="z-10 text-center p-8">
				<h1 className="text-5xl font-black">404</h1>
				<p className="py-12 font-semibold">
					We are sorry! The page you are looking for doesn't exist.
				</p>

				<div className="block md:flex justify-evenly items-center">
					<div
						onClick={() => router.back()}
						className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6 md:mb-0"
					>
						GO BACK
					</div>
					<Link href="/">
						<div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							GO HOME
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Custom404;
