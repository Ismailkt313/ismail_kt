"use client";

import React, { useState, useEffect } from "react";
import Logo from "../layout/Logo";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Socials from "../about/Socials";
import Toast from "../ui/Toast";
import ContactForm from "./ContactForm";
import { trackEvent } from "@/lib/analytics";
import INFO from "../../data/user";
import "./styles/contact.css";

const ContactClient = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(46);
	const [oldLogoSize, setOldLogoSize] = useState(46);
	const [showToast, setShowToast] = useState(false);

	const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		navigator.clipboard.writeText(INFO.main.email).then(() => {
			setShowToast(true);
			trackEvent("email_copied", { email: INFO.main.email });
		});
	};

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
				<div className="contact-logo-container">
					<div style={logoStyle}>
						<Logo width={logoSize} link={false} />
					</div>
				</div>

				<div className="contact-container">
					{/* Title Section */}
					<section aria-label="Contact options intro">
						<h1 className="title contact-title">
							Let&apos;s Get in Touch: Ways to Connect with Me
						</h1>
						<p className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with me. I welcome your
							feedback, questions, and collaborations. If you have a specific proposal
							or role, please feel free to email me directly at&nbsp;
							<a
								href={`mailto:${INFO.main.email}`}
								onClick={handleCopyEmail}
								className="contact-email-link"
								title="Click to copy email"
							>
								{INFO.main.email}
							</a>
							. I respond to all messages within 24 hours. Alternatively, if you
							prefer social media networking, follow my profiles and send a message. I
							look forward to hearing from you!
						</p>
					</section>

					{/* Contact Form Integration */}
					<ContactForm />

					{/* Socials Connection Links */}
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>

			<Toast
				message="Email address copied to clipboard!"
				show={showToast}
				onClose={() => setShowToast(false)}
			/>
		</div>
	);
};

export default ContactClient;
