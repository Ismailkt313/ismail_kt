import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { trackEvent } from "@/lib/analytics";
import "./styles/project.css";

interface ProjectProps {
	logo: string;
	title: string;
	description: string;
	linkText: string;
	link: string;
	technologies: string[];
	flagship: boolean;
}

const Project = ({
	logo,
	title,
	description,
	linkText: _linkText,
	link: _link,
	technologies,
	flagship,
}: ProjectProps) => {
	return (
		<div className={`project ${flagship ? "project-flagship" : ""}`}>
			<Link
				href={`/projects/${title.toLowerCase()}`}
				onClick={() => trackEvent("project_details_viewed", { project: title })}
			>
				<div className="project-container">
					{flagship && <div className="project-flagship-label">Flagship Project</div>}
					<div className="project-logo">
						<Image
							src={logo}
							alt={`${title} logo`}
							width={32}
							height={32}
							style={{ objectFit: "contain" }}
						/>
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>

					{/* Technologies tag badges */}
					<div className="project-tech-badges" aria-label="Project technologies">
						{technologies.map((tech) => (
							<span className="project-tech-badge" key={tech}>
								{tech}
							</span>
						))}
					</div>

					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">Read Case Study</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Project;
