import React from "react";
import { socialData } from "../../constants";

const Social = () => {
	return (
		<div className="home__social" aria-label="Social Media Links">
			{socialData.map((social, index) => (
				<a
					key={index}
					href={social.href}
					className="home__social-icon"
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Follow me on ${social.label}`}>
					<i className={social.iconClass} aria-hidden="true">
						{" "}
					</i>
				</a>
			))}
		</div>
	);
};

export default Social;
