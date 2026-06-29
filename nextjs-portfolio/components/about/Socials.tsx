import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="about-socials-wrapper">
			<div className="about-social-item">
				<a href={INFO.socials.github} target="_blank" rel="noopener noreferrer">
					<span className="about-social-icon">
						<FontAwesomeIcon icon={faGithub} />
					</span>
					<span className="about-social-text">Follow on GitHub</span>
				</a>
			</div>

			<div className="about-social-item">
				<a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
					<span className="about-social-icon">
						<FontAwesomeIcon icon={faLinkedin} />
					</span>
					<span className="about-social-text">Follow on LinkedIn</span>
				</a>
			</div>

			<div className="about-social-item">
				<a href={INFO.socials.instagram} target="_blank" rel="noopener noreferrer">
					<span className="about-social-icon">
						<FontAwesomeIcon icon={faInstagram} />
					</span>
					<span className="about-social-text">Follow on Instagram</span>
				</a>
			</div>

			<div className="about-social-email">
				<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noopener noreferrer">
					<span className="about-social-icon">
						<FontAwesomeIcon icon={faEnvelope} />
					</span>
					<span className="about-social-text">{INFO.main.email}</span>
				</a>
			</div>
		</div>
	);
};

export default Socials;
