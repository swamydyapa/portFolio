import React from "react";
import "./footer.css";

import { footerNavItems, footerSocialLinks } from "../../constants";

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Get the current year

	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__title">Swamy</div>
				<ul className="footer__list">
					{footerNavItems.map((item, index) => (
						<li key={index}>
							<a href={item.href} className="footer__link">
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="footer__social">
					{footerSocialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="footer__social-link"
							target="_blank"
							rel="noopener noreferrer">
							<i className={link.iconClass}></i>
						</a>
					))}
				</div>
				<span className="footer__copy">
					<i className="uil uil-copyright"></i> Swamy Dyapa. All rights reserved{" "}
					{currentYear}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
