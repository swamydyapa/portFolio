import React from "react";

const SkillsComp = ({ skills, title }) => {
	// Splitting skills into two groups for two columns
	const splitIndex = Math.ceil(skills.length / 2);
	const skillsLeft = skills.slice(0, splitIndex);
	const skillsRight = skills.slice(splitIndex);

	return (
		<div className="skills__content">
			<h3 className="skills__title">{title}</h3>
			<div className="skills__box">
				<div className="skills__group">
					{/* Mapping over the first column of skills */}
					{skillsLeft.map((skill, index) => (
						<div className="skills__data" key={index}>
							<i className={skill.icon}></i>
							<div>
								<h3 className="skills__name">{skill.name}</h3>
								<span className="skills__level">{skill.level}</span>
							</div>
						</div>
					))}
				</div>
				<div className="skills__group">
					{/* Mapping over the second column of skills */}
					{skillsRight.map((skill, index) => (
						<div className="skills__data" key={index}>
							<i className={skill.icon}></i>
							<div>
								<h3 className="skills__name">{skill.name}</h3>
								<span className="skills__level">{skill.level}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsComp;
