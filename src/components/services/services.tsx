import React, { useState, useEffect, useRef } from "react";
import "./services.css";
import { servicesData } from "../../constants";

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const modalRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			for (let i = 0; i < modalRefs.current.length; i++) {
				if (
					modalRefs.current[i] &&
					!modalRefs.current[i].contains(event.target as Node)
				) {
					setToggleState(0);
				}
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [toggleState]);

	const toggleTab = (index: number) => {
		setToggleState(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>
			<div className="services__container container grid">
				{servicesData.map((service, index) => (
					<div className="services__content" key={index}>
						<div>
							<i className={service.icon}></i>
							<h3 className="services__title">{service.title}</h3>
						</div>
						<span
							className="services__button"
							onClick={() => toggleTab(index + 1)}>
							View more
							<i className="uil uil-arrow-right services__button-icon"></i>
						</span>
						<div
							className={
								toggleState === index + 1
									? "services__modal active-modal"
									: "services__modal"
							}
							ref={(element) =>
								(modalRefs.current[index] = element as HTMLDivElement)
							}>
							<div className="services__modal-content">
								<i
									className="uil uil-times services__modal-close"
									onClick={() => toggleTab(0)}></i>
								<h3 className="services__modal-title">{service.title}</h3>
								<p className="services__modal-description">
									{service.description}
								</p>
								<ul className="services__modal_services grid">
									{service.servicesList.map((item, index) => (
										<li className="services__modal-service" key={index}>
											<div className="uil uil-check-circle services__modal-icon"></div>
											<p className="services__modal-info">{item}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
