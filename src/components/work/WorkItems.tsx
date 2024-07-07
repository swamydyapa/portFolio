import React from "react";
const WorkItems = ({ item }) => {
	return (
		<div className="work__card" key={item.id}>
			<div className="work__img-wrapper">
				<img src={item.image} alt="" className="work__img" />
			</div>
			<div className="work__content">
				<h3 className="work__title">{item.title}</h3>
				<div className="work__buttons">
					<a
						href={item.demoLink}
						target="_blank"
						className="work__button work__button--primary">
						<i className="uil uil-globe"></i> Live Demo
					</a>
					<a
						href={item.gitHubRepoLink}
						target="_blank"
						className="work__button">
						<i className="uil uil-github-alt"></i>
						GitHub Repo
					</a>
				</div>
			</div>
		</div>
	);
};

export default WorkItems;
