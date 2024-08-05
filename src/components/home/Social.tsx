import React from "react";
import { socialData } from "../../constants";

const Social = () => {
	return (
		<div className="home__social">
			{socialData.map((social, index) => (
				<a
					key={index}
					href={social.href}
					className="home__social-icon"
					target="_blank"
					rel="noopener noreferrer">
					<i className={social.className}></i>
				</a>
			))}
		</div>
	);
};

export default Social;
