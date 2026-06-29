import React from "react";
import { notFound } from "next/navigation";
import INFO from "@/data/user";
import CaseStudyClient from "@/components/projects/CaseStudyClient";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return INFO.projects.map((project) => ({
		slug: project.title.toLowerCase(),
	}));
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;
	const project = INFO.projects.find((p) => p.title.toLowerCase() === slug.toLowerCase());

	if (!project) {
		return {
			title: "Project Not Found",
			description: "The requested project case study could not be found.",
		};
	}

	return {
		title: `${project.title} — Technical Case Study`,
		description: `Engineering challenges, trade-offs, architecture solutions and security details for ${project.title}.`,
	};
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const project = INFO.projects.find((p) => p.title.toLowerCase() === slug.toLowerCase());

	if (!project) {
		notFound();
	}

	return <CaseStudyClient project={project} />;
}
