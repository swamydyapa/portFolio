import React from "react";

const ContactCard = ({ contact, index }) => {
	return (
		<div className="contact__card" key={index}>
			<i className={contact.icon}></i>
			<h3 className="contact__card-title">{contact.title}</h3>
			<span className="contact__card-data">{contact.data}</span>
			<a href={contact.link} className="contact__button">
				{contact.buttonText}
				<i className="bx bx-right-arrow-alt contact__button-icon"></i>
			</a>
		</div>
	);
};

export default ContactCard;
