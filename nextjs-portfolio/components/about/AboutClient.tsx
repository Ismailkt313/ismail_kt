"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../layout/Logo";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Socials from "./Socials";
import INFO from "../../data/user";
import "./styles/about.css";

const AboutClient = () => {
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
				{/* Animated Scroll Logo (Desktop only, hidden on mobile) */}
				<div className="about-logo-container">
					<div style={logoStyle}>
						<Logo width={logoSize} link={false} />
					</div>
				</div>

				<div className="about-container">
					<div className="about-main">
						{/* Bio Content column */}
						<section className="about-right-side" aria-label="About biography">
							<h1 className="title about-title">{INFO.about.title}</h1>
							<p className="subtitle about-subtitle">{INFO.about.description}</p>
						</section>

						{/* Side column: Profile image + socials */}
						<div className="about-left-side">
							<div className="about-image-container">
								<div className="about-image-wrapper">
									<Image
										src="/for_about.jpeg"
										alt={`${INFO.main.name} profile image`}
										className="about-image"
										width={350}
										height={350}
										style={{ objectFit: "cover" }}
									/>
								</div>
							</div>

							<nav className="about-socials" aria-label="About social profiles">
								<Socials />
							</nav>
						</div>
					</div>

					{/* Mobile Socials column */}
					<nav className="about-socials-mobile" aria-label="About social profiles mobile">
						<Socials />
					</nav>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutClient;
