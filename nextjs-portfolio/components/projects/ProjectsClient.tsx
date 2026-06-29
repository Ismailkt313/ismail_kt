"use client";

import React, { useState, useEffect } from "react";
import Logo from "../layout/Logo";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import AllProjects from "./AllProjects";
import "./styles/projects.css";

const ProjectsClient = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(46);
	const [oldLogoSize, setOldLogoSize] = useState(46);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = Math.round(window.pageYOffset);
			const newLogoSize = 46 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 32) {
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
		<div className="page-content">
			<NavBar />
			<div className="content-wrapper">
				{/* Floating scroll logo on desktop, hidden on mobile */}
				<div className="projects-logo-container">
					<div style={logoStyle}>
						<Logo width={logoSize} link={false} />
					</div>
				</div>

				<div className="projects-container">
					{/* Title Section */}
					<section aria-label="Projects list intro">
						<h1 className="title projects-title">
							Things I’ve made trying to put my dent in the universe.
						</h1>
						<p className="subtitle projects-subtitle">
							I&apos;ve worked on a variety of projects representing frontend,
							full-stack, and AI tooling. Many of these projects are open-source and
							available for others to explore on GitHub. If you&apos;re interested in
							any repository, suggest any enhancements or clone the source!
						</p>
					</section>

					{/* Projects Grid */}
					<div className="projects-list">
						<AllProjects />
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsClient;
