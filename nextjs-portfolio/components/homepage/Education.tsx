import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "../ui/Card";
import INFO from "../../data/user";
import "./styles/education.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faGraduationCap}
				title="Education & Training"
				body={
					<div className="education-body">
						{INFO.education.map((edu, index) => (
							<div className="education-item" key={index}>
								<div className="education-dot" />
								<div className="education-content">
									<div className="education-institution">{edu.institution}</div>
									<div className="education-course">{edu.course}</div>
									<div className="education-meta">
										<span className="education-duration">{edu.duration}</span>
										{edu.status === "Currently Enrolled" && (
											<span className="education-badge">{edu.status}</span>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Education;
