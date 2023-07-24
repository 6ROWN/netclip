/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig

// next.config.js
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.tmdb.org",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};
