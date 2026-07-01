import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Muhammed Ismail KT — Developer Portfolio",
		short_name: "Ismail KT",
		description: "React & MERN Stack Developer portfolio — Muhammed Ismail KT",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#14b8a6",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}

// here
