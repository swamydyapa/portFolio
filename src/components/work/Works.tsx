import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "../../constants";
import WorkItems from "./WorkItems";

interface Project {
	id: number;
	image: string;
	title: string;
	category: string;
}
const Works = () => {
	const [item, setItem] = useState({ name: "all" });
	const [projects, setProjects] = useState<Project[]>([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "all") {
			setProjects(projectsData);
		} else {
			const newProjects = projectsData.filter((project) => {
				return project.category.toLowerCase() === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index: number) => {
		setItem({ name: e.target.textContent.toLowerCase() });
		setActive(index);
	};
	return (
		<>
			<div className="work__filters">
				{projectsNav?.map((item, index: number) => {
					return (
						<span
							onClick={(e) => {
								handleClick(e, index);
							}}
							className={`${active === index ? "active-work" : ""} work__item`}
							key={index}>
							{item.name}
						</span>
					);
				})}
			</div>
			<div className="work__container container grid">
				{projects?.map((item) => {
					return <WorkItems item={item} key={item.id} />;
				})}
			</div>
		</>
	);
};

export default Works;
