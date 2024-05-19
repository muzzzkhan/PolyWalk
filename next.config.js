/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "PolyWalk-production.up.railway.app",
			},
		],
		typescript: {
			// !! WARN !!
			// Dangerously allow production builds to successfully complete even if
			// your project has type errors.
			// !! WARN !!
			ignoreBuildErrors: true,
		},
	},
};

module.exports = nextConfig;
