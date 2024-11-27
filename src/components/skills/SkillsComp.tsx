import React from "react";

/**
 * A component to display a list of skills, split into two columns.
 * @param {Object[]} skills - Array of skill objects to display.
 * @param {string} title - Title of the skills section.
 * @returns {JSX.Element} The SkillsComp component.
 */
const SkillsComp = ({ skills, title }) => {
	// Splitting skills into two groups for two columns
	const splitIndex = Math.ceil(skills.length / 2);
	const skillsLeft = skills.slice(0, splitIndex);
	const skillsRight = skills.slice(splitIndex);

	return (
		<section className="skills__content" aria-labelledby="skills-title">
			<h3 className="skills__title">{title}</h3>
			<div className="skills__box" role="list">
				<div className="skills__group">
					{/* Mapping over the first column of skills */}
					{skillsLeft.map((skill, index) => (
						<div className="skills__data" key={index} role="listitem">
							<i className={` ${skill.icon}`} aria-hidden="true"></i>
							<div>
								<h4 className="skills__name">{skill.name}</h4>
								<span className="skills__level">{skill.level}</span>
							</div>
						</div>
					))}
				</div>
				<div className="skills__group">
					{/* Mapping over the second column of skills */}
					{skillsRight.map((skill, index) => (
						<div className="skills__data" key={index} role="listitem">
							<i className={` ${skill.icon}`} aria-hidden="true"></i>
							<div>
								<h4 className="skills__name">{skill.name}</h4>
								<span className="skills__level">{skill.level}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsComp;
