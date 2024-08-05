import React, { useState } from "react";
import "./qualification.css";
import { qualificationsData } from "../../constants"; // Importing the data

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	const renderEducationData = (data) => {
		return data.map((item, index) => (
			<div className="qualification__data" key={index}>
				{index % 2 === 0 ? (
					<>
						<div>
							<h3 className="qualification__title">{item.degree}</h3>
							<span className="qualification__subtitle">
								{item.institution}
							</span>
							<div className="qualification__calendar">
								<i className="uil uil-calendar-alt"></i> {item.year}
							</div>
						</div>
						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
					</>
				) : (
					<>
						<div></div>
						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
						<div>
							<h3 className="qualification__title">{item.degree}</h3>
							<span className="qualification__subtitle">
								{item.institution}
							</span>
							<div className="qualification__calendar">
								<i className="uil uil-calendar-alt"></i> {item.year}
							</div>
						</div>
					</>
				)}
			</div>
		));
	};

	const renderExperienceData = (data) => {
		return data.map((item, index) => (
			<div className="qualification__data" key={index}>
				{index % 2 === 0 ? (
					<>
						<div>
							<h3 className="qualification__title">{item.role}</h3>
							<span className="qualification__subtitle">{item.company}</span>
							<div className="qualification__calendar">
								<i className="uil uil-calendar-alt"></i> {item.year}
							</div>
						</div>
						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
					</>
				) : (
					<>
						<div></div>
						<div>
							<span className="qualification__rounder"></span>
							<span className="qualification__line"></span>
						</div>
						<div>
							<h3 className="qualification__title">{item.role}</h3>
							<span className="qualification__subtitle">{item.company}</span>
							<div className="qualification__calendar">
								<i className="uil uil-calendar-alt"></i> {item.year}
							</div>
						</div>
					</>
				)}
			</div>
		));
	};

	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						{renderEducationData(qualificationsData.education)}
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						{renderExperienceData(qualificationsData.experience)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
