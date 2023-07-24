import React from "react";
import Link from "next/link";

const Logo = () => {
	return (
		<>
			<Link
				href="/"
				className="text-white font-bold text-lg tracking-widest py-4 px-8 custom-shadow "
			>
				<span>NETCLIP</span>
			</Link>
		</>
	);
};

export default Logo;
