import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const WorkItems = ({ item }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalRef = useRef(null);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsModalOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isModalOpen]);

	return (
		<>
			<div className="work__card">
				<div className="work__img-wrapper">
					<figure>
						<img src={item.image} alt={item.title} className="work__img" />
					</figure>
				</div>
				<div className="work__content">
					<h3 className="work__title">{item.title}</h3>

					<div className="work__buttons">
						<a
							href={item.demoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="work__button work__button--primary">
							<i className="uil uil-globe"></i> Live Demo
						</a>
						<a
							href={item.gitHubRepoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="work__button">
							<i className="uil uil-github-alt"></i>
							Open Repo
						</a>
					</div>
					<span className="	work__modal--button" onClick={toggleModal}>
						See Details
						<i className="uil uil-arrow-right work__modal--button-icon"></i>
					</span>
				</div>
			</div>
			{isModalOpen && (
				<Modal item={item} toggleModal={toggleModal} modalRef={modalRef} />
			)}
		</>
	);
};

export default WorkItems;
