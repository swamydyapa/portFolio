import React from "react";
import "./footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__title">Swamy </div>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>
					<li>
						<a href="#testimonials" className="footer__link">
							Testimonials
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://www.instagram.com/"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-instagram"></i>
					</a>
					<a
						href="https://twitter.com/"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-twitter"></i>
					</a>
					<a
						href="https://github.com/"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-github"></i>
					</a>
				</div>
				<span className="footer__copy">
					<i className="uil uil-copyright"></i> Swamy dyapa. All rights reserved{" "}
					{currentYear}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
