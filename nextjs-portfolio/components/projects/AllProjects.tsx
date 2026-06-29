import React from "react";
import Project from "./Project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div
					className={`all-projects-project ${project.flagship ? "all-projects-flagship-wrapper" : ""}`}
					key={index}
				>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						technologies={project.technologies}
						flagship={project.flagship}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
