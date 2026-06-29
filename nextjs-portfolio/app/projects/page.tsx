import type { Metadata } from "next";
import ProjectsClient from "../../components/projects/ProjectsClient";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore Muhammed Ismail KT's web applications and developer tools built with React, Next.js, Node.js, and TypeScript. View open-source code repositories.",
	keywords: [
		"Muhammed Ismail KT projects",
		"Ismail KT portfolio projects",
		"MERN stack projects",
		"ErrorLens",
		"DevShowroom",
		"QuickWork",
		"BistroHub",
		"TIMZO watch e-commerce",
		"SyncChat app",
		"open source developer projects",
	],
};

export default function ProjectsPage() {
	return <ProjectsClient />;
}
