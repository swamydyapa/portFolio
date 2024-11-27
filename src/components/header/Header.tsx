import React, { useState, useEffect } from "react";
import "./header.css";
import { navItemsData } from "../../constants";

const Header = () => {
	const [toggle, setToggle] = useState(false); // State for toggling the menu
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
		setToggle(false); // Close the menu when a navigation item is clicked
	};

	return (
		<header className="header">
			<nav className="nav container" aria-label="Main Navigation">
				<a href="index.html" className="nav__logo" aria-label="Home">
					Swamy
				</a>
				<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
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
									}
									aria-current={activeNav === item.href ? "page" : undefined}
									target="_self">
									<i className={item.icon} aria-hidden="true"></i> {item.label}
								</a>
							</li>
						))}
					</ul>
					<button onClick={() => setToggle(false)} aria-label="Close menu">
						<i className="uil uil-times nav__close"></i>

					</button>
				</div>
				<button
					className="nav__toggle"
					onClick={() => setToggle(!toggle)}
					aria-label="Toggle menu">
					<i className="uil uil-apps "></i>
				</button>
			</nav>
		</header>
	);
};

export default Header;
