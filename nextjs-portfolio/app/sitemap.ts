import type { MetadataRoute } from "next";
import INFO from "@/data/user";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ismail-kt.vercel.app";

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];

	const projectRoutes: MetadataRoute.Sitemap = INFO.projects.map((project) => ({
		url: `${baseUrl}/projects/${project.title.toLowerCase()}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...projectRoutes];
}
