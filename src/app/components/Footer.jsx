import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="py-6 px-20  bg-indigo-950 text-gray-200">
			<div className="flex justify-between items-center flex-col sm:flex-row gap-4">
				<Link href="/" className="hover:text-blue-700">
					<span>NetClips &copy; 2023</span>
				</Link>
				<ul className="space-x-8">
					<Link href={"/about"} className="hover:text-blue-700">
						About
					</Link>
					<Link href={""} className="hover:text-blue-700">
						Privacy
					</Link>
					<Link href={""} className="hover:text-blue-700">
						Contact
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
