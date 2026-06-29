"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";
import Logo from "../components/layout/Logo";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import TechStack from "../components/homepage/TechStack";
import Education from "../components/homepage/Education";
import AllProjects from "../components/projects/AllProjects";
import { trackEvent } from "@/lib/analytics";

import INFO from "../data/user";

import "./homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = Math.round(window.pageYOffset);

			const newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle: React.CSSProperties = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						{/* Hero Section */}
						<section className="homepage-first-area" aria-label="Introduction">
							<div className="homepage-first-area-left-side">
								<div className="hero-status-pill" aria-label="Availability Status">
									<span className="status-dot"></span>
									<span className="status-text">Available for opportunities</span>
								</div>

								<h1 className="title homepage-title">{INFO.homepage.title}</h1>

								<p className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</p>

								<div
									className="hero-stack-row"
									aria-label="Core technologies stack"
								>
									<span className="hero-stack-badge">React</span>
									<span className="hero-stack-badge">Next.js</span>
									<span className="hero-stack-badge">Node.js</span>
									<span className="hero-stack-badge">TypeScript</span>
									<span className="hero-stack-badge">PostgreSQL</span>
								</div>

								<div className="hero-actions-row">
									<div className="hero-buttons">
										<Link href="/projects" className="btn-primary">
											View Projects
										</Link>
										<a
											href="/resume.pdf"
											target="_blank"
											rel="noopener noreferrer"
											onClick={() => trackEvent("resume_downloaded")}
											className="btn-secondary"
										>
											Download Resume
										</a>
									</div>

									{/* Social Links */}
									<nav
										className="homepage-socials"
										aria-label="Social media links"
									>
										<a
											href={INFO.socials.github}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="GitHub profile"
										>
											<FontAwesomeIcon
												icon={faGithub}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={INFO.socials.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="LinkedIn profile"
										>
											<FontAwesomeIcon
												icon={faLinkedin}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={INFO.socials.instagram}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Instagram profile"
										>
											<FontAwesomeIcon
												icon={faInstagram}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="Send email"
										>
											<FontAwesomeIcon
												icon={faMailBulk}
												className="homepage-social-icon"
											/>
										</a>
									</nav>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<Image
											src="/profile.png"
											alt={`${INFO.main.name} — React & MERN Stack Developer`}
											className="homepage-image"
											width={400}
											height={400}
											priority
											style={{ objectFit: "cover" }}
										/>
									</div>
								</div>
							</div>
						</section>

						{/* Projects */}
						<section className="homepage-projects section-alt" aria-label="Projects">
							<AllProjects />
						</section>

						{/* Tech Stack + Education */}
						<div className="homepage-after-title">
							<div className="homepage-tech-stack">
								<TechStack />
							</div>

							<div className="homepage-education">
								<Education />
							</div>
						</div>

						{/* Footer */}
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
