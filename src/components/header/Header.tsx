import React, { useState, useEffect } from "react";

import "./header.css";

import { navItemsData } from "../../constants";

const Header = () => {
	// Change Background Header
	const [Toggle, showMenu] = useState(false); // State for toggling the menu
	const [activeNav, setActiveNav] = useState("#home"); // State for active navigation link

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".header") as HTMLElement;
			// When the scroll is higher than 80 viewport height, add the scroll-header class to the header tag
			if (window.scrollY >= 80) {
				header.classList.add("scroll-header");
			} else {
				header.classList.remove("scroll-header");
			}
		};

		window.addEventListener("scroll", handleScroll); // Add scroll event listener

		return () => {
			window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
		};
	}, []);

	const handleNavClick = (href) => {
		setActiveNav(href); // Set the active navigation link
		showMenu(false); // Close the menu when a navigation item is clicked
	};

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Swamy
				</a>
				<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						{navItemsData.map((item, index) => (
							<li className="nav__item" key={index}>
								<a
									href={item.href}
									onClick={() => handleNavClick(item.href)}
									className={
										activeNav === item.href
											? "nav__link active-link"
											: "nav__link"
									}>
									<i className={item.icon}></i> {item.label}
								</a>
							</li>
						))}
					</ul>
					<i
						className="uil uil-times nav__close"
						onClick={() => showMenu(false)}></i>
				</div>
				<div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
