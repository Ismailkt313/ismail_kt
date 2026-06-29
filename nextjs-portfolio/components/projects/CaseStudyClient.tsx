"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faExternalLinkAlt,
	faShieldAlt,
	faServer,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../layout/Logo";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import { CASE_STUDIES } from "@/data/caseStudies";
import { Project } from "@/data/user";
import "./styles/caseStudy.css";

interface CaseStudyClientProps {
	project: Project;
}

const CaseStudyClient = ({ project }: CaseStudyClientProps) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const studyKey = project.title.toLowerCase();
	const study = CASE_STUDIES[studyKey] || {
		title: `${project.title} — Technical Case Study`,
		subtitle: project.description,
		problem: "Detailed logs are not yet generated for this project.",
		solution: project.description,
		architecture:
			"+-------------------+        REST Payload        +---------------------+\n|      Client       | -------------------------> |    Express Server   |\n+-------------------+                            +---------------------+",
		challenges: "No complex challenges logged.",
		tradeoffs: "No specific architecture trade-offs logged.",
		security: "Standard HTTPS encryption and request validations.",
		deployInfo: "Hosted on production platforms.",
	};

	return (
		<>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="case-study-logo-container">
						<Logo width={46} link={true} />
					</div>

					<div className="case-study-container">
						<Link href="/projects" className="case-study-back-link">
							<FontAwesomeIcon icon={faArrowLeft} />
							<span>Back to Projects</span>
						</Link>

						<header className="case-study-header">
							<div className="case-study-header-main">
								<h1 className="case-study-title">{study.title}</h1>
								<p className="case-study-subtitle">{study.subtitle}</p>
							</div>

							<div className="case-study-meta">
								<div className="meta-section">
									<div className="meta-title">Technologies</div>
									<div className="meta-badges">
										{project.technologies.map((tech) => (
											<span className="meta-badge" key={tech}>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="meta-section">
									<div className="meta-title">GitHub Link</div>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="meta-link"
									>
										<span>View Repository</span>
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</a>
								</div>
							</div>
						</header>

						<div className="case-study-grid">
							{/* Left Column - Content */}
							<main className="case-study-main">
								<section className="case-study-section">
									<h2>Problem Statement</h2>
									<p>{study.problem}</p>
								</section>

								<section className="case-study-section">
									<h2>Solution & Architecture</h2>
									<p>{study.solution}</p>
									<div className="architecture-diagram-wrapper">
										<pre className="architecture-diagram">
											{study.architecture}
										</pre>
									</div>
								</section>

								<section className="case-study-section">
									<h2>Technical Challenges & Resolutions</h2>
									<p>{study.challenges}</p>
								</section>

								<section className="case-study-section">
									<h2>Architectural Trade-offs</h2>
									<p>{study.tradeoffs}</p>
								</section>
							</main>

							{/* Right Column - Sidebar */}
							<aside className="case-study-sidebar">
								<div className="sidebar-card">
									<h3>
										<FontAwesomeIcon icon={faShieldAlt} />
										<span>Security Guardrails</span>
									</h3>
									<p>{study.security}</p>
								</div>

								<div className="sidebar-card">
									<h3>
										<FontAwesomeIcon icon={faServer} />
										<span>Deployment & Infra</span>
									</h3>
									<p>{study.deployInfo}</p>
								</div>
							</aside>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CaseStudyClient;
