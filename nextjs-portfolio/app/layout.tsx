import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://ismail-kt.vercel.app"),
	title: {
		default: "Muhammed Ismail KT | React & MERN Stack Developer | Portfolio",
		template: "%s | Muhammed Ismail KT",
	},
	description:
		"Muhammed Ismail KT — React developer and MERN stack engineer from India. Skilled in JavaScript, TypeScript, Node.js, Express, MongoDB, and modern web development. Explore my projects, technical skills, and development journey.",
	keywords: [
		"Muhammed Ismail KT",
		"Ismail KT",
		"Ismail KT developer",
		"Ismail KT portfolio",
		"React developer",
		"React developer India",
		"MERN stack developer",
		"MERN stack developer India",
		"Full stack developer",
		"Full stack developer India",
		"JavaScript developer",
		"TypeScript developer",
		"Node.js developer",
		"Express.js developer",
		"MongoDB developer",
		"Frontend developer",
		"Frontend developer India",
		"Software engineer",
		"Software developer",
		"Web developer",
		"Web developer portfolio",
		"Junior developer India",
		"Brototype developer",
		"React portfolio",
		"MERN portfolio",
		"hire React developer",
		"hire MERN developer India",
	],
	authors: [
		{
			name: "Muhammed Ismail KT",
			url: "https://github.com/Ismailkt313",
		},
	],
	creator: "Muhammed Ismail KT",
	publisher: "Muhammed Ismail KT",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		siteName: "Muhammed Ismail KT — Developer Portfolio",
		title: "Muhammed Ismail KT | React & MERN Stack Developer",
		description:
			"React developer and MERN stack engineer from India. Explore my projects, skills, and journey in software development.",
		images: [
			{
				url: "/profile.png",
				width: 800,
				height: 800,
				alt: "Muhammed Ismail KT — React & MERN Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Muhammed Ismail KT | React & MERN Stack Developer",
		description:
			"React developer and MERN stack engineer from India. Explore my projects, skills, and development journey.",
		images: ["/profile.png"],
	},
	category: "technology",
	verification: {
		google: "Fxk4TiHZlWYjCaJb47GBetDpNyY6MUgvVfWDO2QjeMQ",
	},
};

// JSON-LD structured data for search engines and AI/LLM tools
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Muhammed Ismail KT",
	alternateName: ["Ismail KT", "Muhammed Ismail", "Ismail"],
	jobTitle: "React & MERN Stack Developer",
	description:
		"React-focused developer with solid fundamentals in JavaScript, TypeScript, and modern frontend and backend development. Trained at Brototype bootcamp.",
	email: "muhammedismailkt@gmail.com",
	telephone: "+918089471532",
	url: "https://ismail-kt.vercel.app",
	sameAs: [
		"https://github.com/Ismailkt313",
		"https://www.linkedin.com/in/ismmail-kt-7117a3321",
		"https://www.instagram.com/_ismail_k_t/",
	],
	knowsAbout: [
		"React",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"SQL",
		"REST APIs",
		"HTML5",
		"CSS3",
		"Tailwind CSS",
		"Git",
		"GitHub",
		"Full Stack Development",
		"MERN Stack",
		"Frontend Development",
		"Web Development",
	],
	alumniOf: {
		"@type": "EducationalOrganization",
		name: "Brototype",
		description: "Full Stack Web Development Bootcamp",
	},
	address: {
		"@type": "PostalAddress",
		addressCountry: "IN",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="light">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</head>
			<body className="antialiased">
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<main id="main-content">{children}</main>
			</body>
		</html>
	);
}
