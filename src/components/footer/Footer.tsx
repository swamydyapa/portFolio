import React from "react";
import "./footer.css";

import { footerNavItems, footerSocialLinks } from "../../constants";

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Get the current year

	return (
		<footer className="footer" role="contentinfo">
			<div className="footer__container container">
				<div className="footer__title" aria-label="Footer Logo">
					Swamy
				</div>
				<nav aria-label="Footer Navigation">
					<ul className="footer__list">
						{footerNavItems.map((item, index) => (
							<li key={index}>
								<a href={item.href} className="footer__link">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<nav aria-label="Footer Social Links">
					<ul className="footer__social">
						{footerSocialLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className="footer__social-link"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.label}>
									<i className={link.iconClass}></i>
								</a>
							</li>
						))}
					</ul>
				</nav>
				<small className="footer__copy">
					<i className="uil uil-copyright"></i> Swamy Dyapa. All rights reserved{" "}
					{currentYear}
				</small>
			</div>
		</footer>
	);
};

export default Footer;
