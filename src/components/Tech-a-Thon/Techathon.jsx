import React from "react";
import "./Techathon.scss";

//Data Import
import {techathonData} from "../../data";

function Techathon(props) {
	const Elements = techathonData.map((item) => {
		return (
			<div className="techathon__item">
				<img src={item.img} alt="" className="techathon__item__image" />
				<h2 className="techathon__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" className="techathon__item__mini" />
			</div>
		);
	});

	return <div className="techathon">{Elements}</div>;
}
import "./Techathon.scss";
export default Techathon;
