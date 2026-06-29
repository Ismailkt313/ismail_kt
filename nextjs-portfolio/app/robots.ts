import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
			{
				userAgent: "GPTBot",
				allow: "/",
			},
			{
				userAgent: "Google-Extended",
				allow: "/",
			},
			{
				userAgent: "CCBot",
				allow: "/",
			},
			{
				userAgent: "anthropic-ai",
				allow: "/",
			},
		],
		sitemap: "https://ismailkt.dev/sitemap.xml",
	};
}
