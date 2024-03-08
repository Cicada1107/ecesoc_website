import React from "react";
import "./Events.scss";
import { useState, useEffect } from "react";


import Techathon from "../../components/Tech-a-Thon/Techathon";
import DiscordBots from "../../components/DiscordBots/DiscordBots";

// Particles js Configuration file
import particles from "../../particlesjs-config";


function Events(props) {

    //Animation Initiation
	useEffect(() => {
		tsParticles.load("particles", particles);
	},[]);

    //State to switch between Categories
	const [tab, setTab] = useState("techathon");
	return (
		<>
			<div className="portfolio">
				<div className="portfolio__header padding" id="particles">
					<h1 className="portfolio__header__heading">EVENTS</h1>

					<div className="category-menu">
						<div
							className={`btn-category ${
								tab === "techathon" ? "btn-active" : ""
							}`}
							onClick={() => setTab("techathon")}
						>
							Tech-A-Thon
						</div>
						<div
							className={`btn-category ${
								tab === "discordbots" ? "btn-active" : ""
							}`}
							onClick={() => setTab("discordbots")}
						>
							Discord Bots
						</div>
					</div>
				</div>

				<div className="cat-display padding">
					{tab === "techathon" && <Techathon />}
					{tab === "discordbots" && <DiscordBots />}
				</div>
			</div>
		</>
	);
}
import "./Events.scss";

export default Events;
