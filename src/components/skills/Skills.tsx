import React from "react";

import "./skills.css";

import {
	frontEndSkillsData,
	backEndSkillsData,
	frameWorksLibrariesData,
} from "../../constants";

import SkillsComp from "./SkillsComp";

const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My technical level</span>
			<div className="skills__container container grid">
				<SkillsComp title="FrontEnd TechStack" skills={frontEndSkillsData} />
				{/* <SkillsComp title="BackEnd Developer" skills={backEndSkillsData} /> */}
				<SkillsComp
					title="Frameworks/Libraries"
					skills={frameWorksLibrariesData}
				/>
			</div>
		</section>
	);
};

export default Skills;
