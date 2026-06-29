import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<ul className="footer-nav-link-list">
					<li className="footer-nav-link-item">
						<Link href="/">Home</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link href="/about">About</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link href="/projects">Projects</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</div>

			<div className="footer-socials-and-credits">
				<div className="footer-socials">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Email"
					>
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				</div>
				<div className="footer-credits">
					<div className="footer-credits-text">
						© {new Date().getFullYear()} {INFO.main.name}. All Rights Reserved.
					</div>
					<div className="footer-sub-credits-text">Handcrafted in India 🇮🇳</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
