import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
			{
				protocol: "https",
				hostname: "cdn.iconscout.com",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000; includeSubDomains; preload",
					},
				],
			},
		];
	},
};

export default nextConfig;
