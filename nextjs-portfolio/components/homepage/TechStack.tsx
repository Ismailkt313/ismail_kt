"use client";

import React from "react";
import {
	SiReact,
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss,
	SiTailwindcss,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiGit,
	SiGithub,
	SiPostman,
	SiBootstrap,
	SiNextdotjs,
	SiRedux,
	SiAxios,
	SiSocketdotio,
	SiJsonwebtokens,
	SiPostgresql,
	SiFigma,
	SiNpm,
	SiVercel,
	SiRender,
	SiOpenai,
} from "react-icons/si";
import {
	FaDatabase,
	FaServer,
	FaCode,
	FaCreditCard,
	FaLock,
	FaProjectDiagram,
	FaPlay,
	FaEraser,
	FaBrain,
	FaCogs,
	FaAws,
} from "react-icons/fa";
import INFO from "../../data/user";
import "./styles/techStack.css";

const iconMap: Record<string, React.ReactNode> = {
	react: <SiReact />,
	javascript: <SiJavascript />,
	typescript: <SiTypescript />,
	html5: <SiHtml5 />,
	css3: <SiCss />,
	tailwind: <SiTailwindcss />,
	bootstrap: <SiBootstrap />,
	nextjs: <SiNextdotjs />,
	redux: <SiRedux />,
	axios: <SiAxios />,
	nodejs: <SiNodedotjs />,
	express: <SiExpress />,
	socketio: <SiSocketdotio />,
	api: <FaServer />,
	jwt: <SiJsonwebtokens />,
	security: <FaLock />,
	payment: <FaCreditCard />,
	mongodb: <SiMongodb />,
	mongoose: <SiMongodb />,
	postgresql: <SiPostgresql />,
	sql: <FaDatabase />,
	architecture: <FaProjectDiagram />,
	pattern: <FaCogs />,
	aws: <FaAws />,
	cicd: <FaPlay />,
	git: <SiGit />,
	github: <SiGithub />,
	postman: <SiPostman />,
	figma: <SiFigma />,
	eraser: <FaEraser />,
	vscode: <FaCode />,
	npm: <SiNpm />,
	vercel: <SiVercel />,
	render: <SiRender />,
	dsa: <FaBrain />,
	oop: <FaCode />,
	solid: <FaCogs />,
	ai: <SiOpenai />,
};

const colorMap: Record<string, string> = {
	react: "#61DAFB",
	javascript: "#F7DF1E",
	typescript: "#3178C6",
	html5: "#E34F26",
	css3: "#1572B6",
	tailwind: "#06B6D4",
	bootstrap: "#7952B3",
	nextjs: "#000000",
	redux: "#764ABC",
	axios: "#5A29E4",
	nodejs: "#339933",
	express: "#000000",
	socketio: "#010101",
	api: "#14b8a6",
	jwt: "#000000",
	security: "#EF4444",
	payment: "#0070F3",
	mongodb: "#47A248",
	mongoose: "#880000",
	postgresql: "#4169E1",
	sql: "#4479A1",
	architecture: "#8B5CF6",
	pattern: "#6B7280",
	aws: "#FF9900",
	cicd: "#10B981",
	git: "#F05032",
	github: "#181717",
	postman: "#FF6C37",
	figma: "#F24E1E",
	eraser: "#3B82F6",
	vscode: "#007ACC",
	npm: "#CB3837",
	vercel: "#000000",
	render: "#46E3B7",
	dsa: "#EC4899",
	oop: "#3B82F6",
	solid: "#10B981",
	ai: "#10A37F",
};

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TechStack = () => {
	const [showAll, setShowAll] = useState(false);

	const visibleCategories = showAll
		? INFO.techStack
		: INFO.techStack.filter((cat) =>
				["Frontend", "Backend", "Databases"].includes(cat.category)
			);

	return (
		<section className="tech-stack-section" aria-label="Technical Skills">
			<h2 className="tech-stack-title">Tech Stack & Skills</h2>

			<div className="tech-stack-grid">
				{visibleCategories.map((category) => (
					<div key={category.category} className="tech-category">
						<h3 className="tech-category-title">{category.category}</h3>
						<div className="tech-skills-list">
							{category.skills.map((skill) => (
								<div key={skill.name} className="tech-skill-item">
									<span
										className="tech-skill-icon"
										style={{ color: colorMap[skill.icon] || "#65656d" }}
										aria-hidden="true"
									>
										{iconMap[skill.icon] || null}
									</span>
									<span className="tech-skill-name">{skill.name}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="tech-stack-expand-container">
				<button
					onClick={() => setShowAll(!showAll)}
					className="tech-stack-expand-btn"
					aria-expanded={showAll}
				>
					{showAll ? "Show Less" : "Explore All Skills"}
					{showAll ? <FiChevronUp /> : <FiChevronDown />}
				</button>
			</div>
		</section>
	);
};

export default TechStack;
