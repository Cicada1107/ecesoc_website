import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">About Us</h1>
				</div>
				<div className="tos__body padding">
					
				</div>
			</div>
		</>
	);
}
import "./TermsAndService.scss";

export default TermsAndService;
