import React from "react";
import "./modal.css";

const Modal = ({ item, toggleModal, modalRef }) => {
	return (
		<div className="modal active-modal">
			<div className="modal-content" ref={modalRef}>
				<i className="uil uil-times modal-close" onClick={toggleModal}></i>
				<div className="modal__img-wrapper">
					<figure>
						<img src={item.image} alt={item.title} className="modal__img" />
					</figure>
				</div>
				<h3 className="modal-title">{item.title}</h3>
				<div className="modal-technologies ">
					{item.technologies.map((tech, index) => (
						<span className="modal-tech-pill" key={index}>
							{tech}
						</span>
					))}
				</div>
				<p className="modal-description">{item.description}</p>

				<div className="modal-buttons">
					<a
						href={item.demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="modal-button modal-button--primary">
						<i className="uil uil-globe"></i> Live Demo
					</a>
					<a
						href={item.gitHubRepoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="modal-button">
						<i className="uil uil-github-alt"></i> Open Repo
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal;
