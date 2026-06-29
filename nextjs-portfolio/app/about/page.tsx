import type { Metadata } from "next";
import AboutClient from "../../components/about/AboutClient";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Muhammed Ismail KT — a self-taught MERN stack developer trained at Brototype bootcamp. Building real-world applications with React, Node.js, Express, and MongoDB.",
	keywords: [
		"about Muhammed Ismail KT",
		"Ismail KT about",
		"MERN stack developer background",
		"Brototype developer",
		"self-taught developer India",
		"React developer story",
		"software engineer background",
	],
};

export default function AboutPage() {
	return <AboutClient />;
}
